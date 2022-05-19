import { Component } from 'react';

class Memo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            memos: [
                { id: 1, memo: "내용" },
                { id: 2, memo: "메모를 만들었습니다" },
            ],
            inputText : "",
            inputId : 3,
        }
        
    }
    // delete 함수
    deleteMemo = (id) => {
        const nextMemoList = this.state.memos.filter( m => m.id !== id );
        this.setState({ memos : nextMemoList });
    }
    // state에 메모 추가하는 함수
    addToState = (e) => {
        this.setState({ [e.target.name] : e.target.value });
    }

    // state.memos 에 새로운 요소 추가하는 함수
    addMemo = () => {
        const nextMemoList = this.state.memos.concat({
            id : this.state.inputId++, memo : this.state.inputText
        });
        this.setState({ memos : nextMemoList });
        this.setState({ inputId : this.state.inputId++ });
    }

    render() {
        const { memos } = this.state;
        return (
            <div>
                <h1>메모</h1>
                <input type="text" name="inputText" onChange={ this.addToState }></input>
                <button onClick={ this.addMemo }>추가</button>

                <ul>{ memos.map( m => 
                    <li key={ m.id }>{ m.memo }
                        <button onClick={ () => { this.deleteMemo(m.id) } }> X </button>
                    </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default Memo;