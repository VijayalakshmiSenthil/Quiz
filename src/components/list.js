import { ConfigProvider, Radio, Space } from 'antd';
import { useState } from 'react';
import { Card } from 'antd';
import { examQuestions } from "../data"

function Listitems() {
  
  const [score, setScore] = useState(0);
  const [value, setValue] = useState();
  const [currentQuestion,setcurrentQuestion]= useState(0);

//Radio Checked
const onChange = (e) => {
  console.log(e);
  setValue(e.target.value);
};

//check the correct answer
  const optionClicked = (isCorrect) => {
    if(isCorrect){
      setScore(score+1);
    }
    if(currentQuestion+1<examQuestions.length){
      setcurrentQuestion(currentQuestion+1);
    }
  };
  
  return (
    <>
    <div class="list">
    <h1 class="header">Start your Quiz</h1>
    <h2 class="header">Your score: <span style={{color:"#774125"}}>{score}</span></h2>
    </div>
    <div className="list">
            <ConfigProvider theme={{token: { colorBgContainer: '#774125',}}}>
            <Space>
            <Card hoverable title={`${examQuestions[currentQuestion].id}.  ${examQuestions[currentQuestion].question}`} bordered={false} style={{ width: 500 }}>
              <ul>
              {examQuestions[currentQuestion].answers.map((option)=>{
              return(
              
                <li key={option.id}>
                <Radio.Group onChange={onChange} value={value}>
                  <Radio value={option.answertext} onClick={()=>optionClicked(option.isCorrect)}>
                        {option.answertext}
                  </Radio>   
                </Radio.Group>
                </li>
              );
              }) 
              }
              </ul>
            </Card>  
        </Space>
      </ConfigProvider>      
      </div>
    </>
  );
            }
export default Listitems;








/*import { ConfigProvider, Radio, Space } from 'antd';
import { useState } from 'react';
import { Card } from 'antd';
import ViewScore from './score';
import { Submit } from './submit';


function Listitems({ option}) {
  const [value, setValue] = useState();
  const [score, setScore] = useState(0);
  const[totalscore,setTotalScore]=useState(0);
  
//Radio Checked
  const onChange = (e) => {
    setValue(e.target.value);
  };
//check the correct answer
  const optionClicked = (isCorrect) => {
    if(isCorrect){
      setScore(score+1)
      setTotalScore(totalscore+score)
    }
  };
//display the individual score
  const handleResultClick = (result) => {
    setScore(result);
    alert(`Your Score: ${result}`);
  };

//display the total score
const handleTotal = (final) =>{
  setTotalScore(final);
  alert(`Final: ${final}`);
}



  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorBgContainer: '#774125',
          },
        }}
      >
        <Space>
          <div className='list'>
            <Card hoverable title={option.id} bordered={false} style={{ width: 500 }}>
              <p>{option.question}</p>
              <ul>
                <Radio.Group onChange={onChange} value={value}>
                  {option.answers.map((answer, index) => (
                    <li key={index}>
                      <Radio value={answer.answertext} onClick={()=>optionClicked(answer.isCorrect)}>
                        {answer.answertext}
                      </Radio>
                    </li>
                  ))}
                </Radio.Group>
              </ul>
              <ViewScore onClick={() => handleResultClick(score)} />
              
              
              
            </Card>
          </div>
        </Space>
      </ConfigProvider>
     <div>
      <Submit/>
     </div>
    
    </>
  );
}

export default Listitems;


*/


