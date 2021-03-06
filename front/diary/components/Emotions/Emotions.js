import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import Button from "../UI/Button";
import Emotion from "./Emotion";

const Cats = [
  { id: 1, name: "슬픔", color: "#122792" },
  { id: 2, name: "기쁨", color: "#FF993A" },
  { id: 3, name: "놀람", color: "#46E5D2" },
  { id: 4, name: "공포", color: "#7048E7" },
  { id: 5, name: "분노", color: "#FF4E49" },
  { id: 6, name: "혐오", color: "#3DB97F" },
  { id: 7, name: "지루함", color: "#4BAAEE" },
  { id: 8, name: "흥미", color: "#FF8DA9" },
];

const Emotions = (props) => {
  
  // 감정 버튼 클릭 상태
  const [click, setClick] = useState(false);
  const [click1, setClick1] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [click4, setClick4] = useState(false);
  const [click5, setClick5] = useState(false);
  const [click6, setClick6] = useState(false);
  const [click7, setClick7] = useState(false);

  // Click state가 true일 때  emotion 컴포넌트를 보여주는 function
  const onClickHandler = () => setClick(!click);
  const onClickHandler1 = () => setClick1(!click1);
  const onClickHandler2 = () => setClick2(!click2);
  const onClickHandler3 = () => setClick3(!click3);
  const onClickHandler4 = () => setClick4(!click4);
  const onClickHandler5 = () => setClick5(!click5);
  const onClickHandler6 = () => setClick6(!click6);
  const onClickHandler7 = () => setClick7(!click7);
  
  // emotion에서 선택된 단어 상태
  const [selected, setSelected] = useState([]);
  
  const selectHandler = (emotion) => {
    setSelected(emotion);
  };


  return (
    <Container>
      <div className="title">오늘의 기분은 어떠셨나요?</div>
      <div className="seleted-word-area">
        {selected.length > 0 ? (
          selected
        ) : (
          <div>선택하신 단어가 표시됩니다.</div>
        )}
      </div>
      <Wrap>
        {click ? (<Emotion emotion={props.emotion} selectHandler={selectHandler}/>) : ( <BtnEmotion onClick={onClickHandler}>
            <div className="btn">
              <div className="btn-main-emotion" style={{ backgroundColor: Cats[0].color }}></div>
              <p className="txt-main-emotion">{Cats[0].name}</p>
            </div></BtnEmotion>)}
        {click1 ? (<Emotion emotion={props.emotion} selectHandler={selectHandler} />) : ( <BtnEmotion onClick={onClickHandler1}>
            <div className="btn">
              <div className="btn-main-emotion" style={{ backgroundColor: Cats[1].color }}></div>
              <p className="txt-main-emotion">{Cats[1].name}</p>
            </div></BtnEmotion>)}
        {click2 ? (<Emotion emotion={props.emotion} selectHandler={selectHandler} />) : ( <BtnEmotion onClick={onClickHandler2}>
            <div className="btn">
              <div className="btn-main-emotion" style={{ backgroundColor: Cats[2].color }}></div>
              <p className="txt-main-emotion">{Cats[2].name}</p>
            </div></BtnEmotion>)}
        {click3 ? (<Emotion emotion={props.emotion} selectHandler={selectHandler} />) : ( <BtnEmotion onClick={onClickHandler3}>
            <div className="btn">
              <div className="btn-main-emotion" style={{ backgroundColor: Cats[3].color }}></div>
              <p className="txt-main-emotion">{Cats[3].name}</p>
            </div></BtnEmotion>)}
            {click4 ? (<Emotion emotion={props.emotion} selectHandler={selectHandler} />) : ( <BtnEmotion onClick={onClickHandler4}>
            <div className="btn">
              <div className="btn-main-emotion" style={{ backgroundColor: Cats[4].color }}></div>
              <p className="txt-main-emotion">{Cats[4].name}</p>
            </div></BtnEmotion>)}
        {click5 ? (<Emotion emotion={props.emotion} selectHandler={selectHandler} />) : ( <BtnEmotion onClick={onClickHandler5}>
            <div className="btn">
              <div className="btn-main-emotion" style={{ backgroundColor: Cats[5].color }}></div>
              <p className="txt-main-emotion">{Cats[5].name}</p>
            </div></BtnEmotion>)}
        {click6 ? (<Emotion emotion={props.emotion} selectHandler={selectHandler} />) : ( <BtnEmotion onClick={onClickHandler6}>
            <div className="btn">
              <div className="btn-main-emotion" style={{ backgroundColor: Cats[6].color }}></div>
              <p className="txt-main-emotion">{Cats[6].name}</p>
            </div></BtnEmotion>)}
        {click7 ? (<Emotion emotion={props.emotion} selectHandler={selectHandler} />) : ( <BtnEmotion onClick={onClickHandler7}>
            <div className="btn">
              <div className="btn-main-emotion" style={{ backgroundColor: Cats[7].color }}></div>
              <p className="txt-main-emotion">{Cats[7].name}</p>
            </div></BtnEmotion>)}
      </Wrap>

      {selected.length > 0 ? (
        <Link href={{ pathname: `/emotions/write`, query: { selected } }}>
          <Button>일기쓰기</Button>
        </Link>
      ) : (
        <button className="btn-disable">단어를 선택해주세요</button>
      )}
    </Container>
  );
};

export default Emotions;

const Container = styled.div`
  position: relative;
  width: 94%;
  margin: 0 auto;
  z-index: 1px;

  .title {
    ${fonts.H2};
    color: ${colors.gray2};
    text-align: center;
    padding: 30px 0;
  }

  .seleted-word-area {
    border: 1px dashed ${colors.gray4};
    padding: 40px 45px;
    text-align: center;
    ${fonts.Body1};
    color: ${colors.gray4};
  }

  .btn-disable {
    width: 100%;
    padding: 20px;
    margin: 30px auto;
    ${fonts.Body1};
    font-weight: 600;
    background-color: ${colors.gray4};
    color: white;
    border: 0;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
  }
`;

const Wrap = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 24px;
  margin: 0 auto;
`;

const BtnEmotion = styled.div`
  width: 23%;

  .btn {
    border: 1px solid ${colors.gray4};
    border-radius: 3px;
    padding: 8px;
    margin-top: 10px;
  }

  .btn:hover {
    border: 1px solid ${colors.primary};
    color: ${colors.primary}
  }
  
  .btn-main-emotion {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }

  .txt-main-emotion {
    text-align: right;
    margin-top: 10px;
    ${fonts.Body1}
    color: ${colors.gray3}
  }
`;
