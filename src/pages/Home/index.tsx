import { useQuery } from "@tanstack/react-query";
import { getList } from "../../api/todos";
import * as Style from "./style";
import { ListItem } from "../../types/todos/type";
import { supabase } from "../../supabase/supabase";
import { useEffect } from "react";

export default function Home() {
  const { data } = useQuery({
    queryKey: ["home", "list"],
    queryFn: () => getList(),
  });

  // 데이터 조회 후 미완료 항목이 있으면 push 알림 전송
  const checkTodoStatus = async () => {
    try {
      const res = await supabase
        .from("todo")
        .select("*")
        .eq("isCompleted", false);

      if ((res.data?.length as number) > 0) {
        pushNotiTrigger(res.data?.length as number);
      }
    } catch (error) {
      return;
    }
  };

  //serviceWorker push 트리거
  const pushNotiTrigger = (missedTaskCount: number) => {
    if (
      typeof window !== undefined &&
      "serviceWorker" in navigator &&
      "PushManager" in window
    ) {
      navigator.serviceWorker.ready.then((registration) => {
        registration.showNotification("할 일이 남았습니다.", {
          body: `완료하지 않은 일이 ${missedTaskCount}개 있습니다.`,
        });
      });
    }
  };

  // 10분마다 조회하여 확인
  setInterval(() => {
    checkTodoStatus();
  }, 600000);

  // push 알림 권한
  function requestPushNotificationPermission() {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        console.log("푸시 알림 권한이 허용되었습니다.");
      } else {
        console.log("푸시 알림 권한이 거부되었습니다.");
      }
    });
  }

  useEffect(() => {
    requestPushNotificationPermission();
  }, []);

  return (
    <Style.ListWrapper>
      <Style.ListTitle>할 일</Style.ListTitle>
      <Style.ListHeader>
        <Style.HeaderData>제목</Style.HeaderData>
        <Style.HeaderData>내용</Style.HeaderData>
        <Style.HeaderData>상태</Style.HeaderData>
      </Style.ListHeader>
      {((data as ListItem[]) || [])?.map((item) => {
        return (
          <Style.Row key={item.id}>
            <Style.RowData>
              <p>{item.title}</p>
            </Style.RowData>
            <Style.RowData>
              <p>{item.content}</p>
            </Style.RowData>
            <Style.RowData style={{ textAlign: "center" }}>
              {item.isCompleted ? "완료" : "미완료"}
            </Style.RowData>
          </Style.Row>
        );
      })}
    </Style.ListWrapper>
  );
}
