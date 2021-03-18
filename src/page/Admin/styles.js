import styled from 'styled-components';

export default {
    Container: styled.section`
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
        background-color: var(--blue-active);
    `, 
    Box: styled.div`
        height:100%;
        width: 100%;
        display:flex;
        flex:1;
        justify-content:center;
        align-items: center;
    `,
    Login: styled.div`
        height:260px;
        width:340px;
        background-color:#CCC;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        display:flex;
        flex-direction:column;
        padding:10px 20px;
    `,
    TextLogin: styled.strong`
        font-size:24px;
        color: var(--brown-active);
        font-family: McLaren;
        margin-bottom: 10px;
        margin-top:10px;
    `,
    Label:  styled.label`
        font-size:16px;
        color: var(--brown-active);
        font-family: McLaren;
        margin-bottom:2px;
        margin-top:10px;
    `,
    Input: styled.input`
        padding: 6px;
        font-size: 16px;
        color:#666;   
        border: 1px solid #DDD;
        border-radius:4px;
        outline:none; 
    `,    
    Information: styled.div`
        height: 260px;
        width:260px;
        background-color: var(--brown-active);
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        display: flex;
        flex-direction:column;
        justify-content:center;
        align-items: center;
        padding: 0 10px;
    `,
    Text: styled.strong`
        font-size:24px;
        color: var(--grey-soft);
        font-family: McLaren;
    `,
    TextInformation: styled.p`
        font-size:16px;
        color: var(--grey-soft);
        font-family: Roboto;
        margin-top: 15px;
        text-align:center;
    `,
    BoxButton: styled.div`
        display:flex;
        justify-content: flex-end;
    `,
    Button: styled.button`
        padding:8px;
        width: 120px;
        border-radius: 4px;
        margin-top:10px;
        color: var(--blue-strong);
        font-weight:bold;
        background-color: var(--blue-relative);
        border: none;   
        outline:none;  
        cursor: pointer;
        transition: 0.3s;
        
        :hover {
            background-color:var(--blue-active);
            color: var(--grey-soft);
        }
    `,
}