import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

import axios from 'axios';
import API from '../API';

function Register() {
    const history = useHistory();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data)
        // axios.get('https://react-shopping-8ff9a-default-rtdb.firebaseio.com/formData.json', data)
        // .then(response => {
        //     console.log(response);
        // })
        fetch('https://react-shopping-8ff9a-default-rtdb.firebaseio.com/formData.json',
        {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(() => {
            history.replace('/');
            
        })
    }
 


    //  name을 넘기는 것으로 input value들 지켜보기


    return (
        <div>
            <p>회원가입</p>
            {/* handleSubmit은 onSubmit을 호출하기전에 입력을 검증 */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor='name' >이름:</label>
                <input {...register('name')}/>
                <br />
                <label htmlFor='email' >이메일:</label>
                <input defaultValue="ldcc@lotte.net" {...register("email")} />
                <br />
                <label htmlFor='phoneNumber' >전화번호:</label>
                <input {...register("phoneNumber", { required: true })} />
                <br />
                <label htmlFor='gender' >성별:</label>
                <select {...register("gender")}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                <input type="submit" />
            </form>
        </div>
    )
}

export default Register;

// register 호출하면 우리는 전파합니다 연산자들을 
// 모든 props는 input에 스스로 inject될 것