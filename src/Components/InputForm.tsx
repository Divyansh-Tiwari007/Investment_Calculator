
import { useForm } from 'react-hook-form';



 function InputForm  ( onClicked :any)  {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onChange', // Enable onChange mode to validate inputs on change
    });


    const onSubmit = (e:any) => {
        
    console.log("DFSDf")
        onClicked();  
    };

    return (
        <form onSubmit={(event)=>{
            handleSubmit(onSubmit);
            
        }}>
            <label htmlFor="input1">Initial Investment</label>
            <input
                id="input1"
                {...register('input1', { required: true, min: 1, pattern: /^[0-9]*$/ })}
                defaultValue={10}
            />
            
            {errors.input1?.type === 'required' && <span>This field is required </span>}
            {errors.input1?.type === 'pattern' && <span>This field should only contain numbers</span>}
            {errors.input1?.type === 'min' && <span>Invalid Input</span>} 

            <label htmlFor="input2">Annual Investment</label>
            <input
                
                id="input2"
                {...register('input2', { required: true, min: 1, pattern: /^[0-9]*$/ })}
                defaultValue={10}
            />
            {errors.input2?.type === 'required' && <span>This field is required </span>}
            {errors.input2?.type === 'pattern' && <span>This field should only contain numbers</span>}
            {errors.input2?.type === 'min' && <span>Invalid Input</span>} 

            <label htmlFor="input3">Expected Returns</label>
            <input
                
                id="input3"
                {...register('input3', { required: true, min: 1, pattern: /^[0-9]*$/ })}
                defaultValue={10}
            />
            {errors.input3?.type === 'required' && <span>This field is required </span>}
            {errors.input3?.type === 'pattern' && <span>This field should only contain numbers</span>}
            {errors.input3?.type === 'min' && <span>Invalid Input</span>} 

            <label htmlFor="input4">Number of Years</label>
            <input
                
                id="input4"
                {...register('input4', { required: true, min: 1, pattern: /^[0-9]+$/ })}
                defaultValue={10}
                
            />
            {errors.input4?.type === 'required' && <span>This field is required </span>}
            {errors.input4?.type === 'pattern' && <span>This field should only contain numbers</span>}
            {errors.input4?.type === 'min' && <span>Invalid Input</span>} 

            <button type="submit" disabled={Object.keys(errors).length !== 0 } >
                Submit
            </button>
        </form>
    );
};

export default InputForm;
