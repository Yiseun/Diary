import { Reset } from "styled-reset";
import Link from "next/link";
import Button from "../components/UI/Button";
import Calendar from "../components/Calendar/Calendar";

export default function Home() {
  return (
    <Calendar />
  );
}

// Post 데이터 불러와서 해당하는 날짜에 표시해주기
