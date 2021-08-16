import {createRef} from "react";

export function Form() {

    let myFormRef = createRef()
    const onSubmitForm = (e) => {
      e.preventDefault();
      console.log('formDubmit')
        console.log(myFormRef.current)
    }
    return (
        <div className="formBox">
            <form onSubmit={onSubmitForm} ref={myFormRef}>
                <input type="text" name={'model'}/>
                <input type="number" name={'price'}/>
                <input type="number" name={'year'}/>
                <button>Save</button>
            </form>
        </div>
    );
}