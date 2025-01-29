import { supabase } from "../../supabase/supabase";

export const getList = async () => {
  let { data: todo, error } = await supabase.from("todo").select("*");
  if (error) return error;
  return todo;
};
