import React from 'react';

export function App(props) {
    const [isChecked, setIsChecked] = React.useState(true);

    const handleChange = event => {
        setIsChecked(event.target.checked);
    }

    const renderForm1 = () => (
        <form>
            <label>Name 1</label>
            <input type='text'/>
        </form>
    )

    const renderForm2 = () => (
        <form>
            <label>Name 2</label>
            <input type='text'/>
        </form>
    )

    const form = isChecked ? renderForm1() : renderForm2();

    return (
        <div className='App'>
            <div>
                <label>test</label>
                <input type='checkbox' checked={isChecked} onChange={handleChange}/>
            </div>

            {/*БЫЛО*/}
            {/*{form}*/}
            {/*ОТВЕТ: Меняем ключи у формы, чтобы с минимальными затратами добиться необходимого поведения */}
            Здесь работает механизм reconcilation
            Если ключи изменяются, то уничтожается старый компонент и рендерится заново.
            Под капотом, при сравнении DOM деревьев, он сравнивает ключи, чтобы оптимизировать рендер или выявлять изменившившиеся элементы.

            <div key={isChecked}>{form}</div>

        </div>
    )
}