
import { ChangeEvent, useState } from "react"

type ThdudInsertProps = {
  addForm: (todo: string) => void
}

const ThdudForm = ({ addForm }:ThdudInsertProps) =>{  
  const [value, setValue] = useState('')

  const onChange = (e: ChangeEvent<HTMLInputElement>)=>{
    setValue(e.target.value)
  }
  
  // form으로 감싸서 dispatch보내는 건데 형식이 FormEvent가 아님. 그럼 뭐지
  // SyntheticEvent 합성이벤트로 감싸니까 됐음.
  const onSubmit = (e:React.SyntheticEvent) => {
    e.preventDefault();
    console.log('thdudform:', value)
    addForm(value)
    setValue("")
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <input 
          type = "text"
          placeholder= "할 일을 입력하세요"
          value= {value}
          onChange ={onChange}
        />
      </form>
      <button type="submit">등록</button>
    </>
  )
}

export default ThdudForm;