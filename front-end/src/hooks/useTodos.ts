import { useCallback, useState } from "react";
import { Todo } from "../types/api/todo";
import axios from "axios";

export const useTodos = () => {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const getTodos = useCallback(() => {
    axios
    .get<Array<Todo>>('https://localhost:3001')
    .then((res) => setTodos(res.data))
    .catch(() => alert('Todoリストの取得に失敗しました'))
  }, []);

  return { getTodos, todos }
};