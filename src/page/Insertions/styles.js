import styled from 'styled-components';

export default {
    Container:styled.section`
        top:0;
        right:0;
        bottom:0;
        left:0;        
        display:flex;
        flex-direction: row;
    `,
    BoxLeft:styled.div`
        background-color:var(--blue-strong);
        width:250px;
        height: 100%;
        padding: 10px;
        position:fixed;
    `,
    BoxViews:styled.div``,
    BoxTitle:styled.div`
        margin-bottom:10px;
        margin-top:10px;
    `,
    InsertionTitle:styled.strong`
        color:var(--grey-soft);
        font-size:28px;
        font-family:Acme;
    `,
    BoxInsertion:styled.div``,
    LinkText:styled.p`
        font-family: Roboto;
        font-size:16px;
        color:#FFF;
        text-align:center;
        transition:all ease .2s !important;
        cursor: pointer;
        padding:4px;
        transform:scale(0.90);

        :hover {
            transform:scale(1);
        }
    `,
    Logout:styled.button`
        position:fixed;
        bottom:0;
        left:0;
        width:250px;
        border:none;
        outline:none;
        cursor:pointer;
        height: 50px;
        background-color:var(--blue-relative);
        color: #FFF;
        font-weight:bold;
        font-size:18px;
        
        :hover {
            font-style: italic;
        }
        `,
    BoxRight:styled.div`
        display:flex;
        flex:1;
        padding-left:280px;
        padding-right:30px;
        padding-top:20px;
    `,
    BoxCarSale:styled.div`
        background-color:#00FF00;
        width:100%;
        height:200px;
    `,
    TitleBoxesViews:styled.p`
        font-size:30px;
        font-family:Roboto;
        font-weight:100;
        color:var(--brown-active);
    `,

    ButtonAdicionar:styled.button`
        padding:8px 40px;
        border:none;
        outline:none;
        cursor:pointer;
        color:var(--brown-relative);
        border-radius:3px;
        font-size:18px;
        position:fixed;
        top:18px;
        right:30px;
        transition:.2s;

        :hover {
            border: 1px solid var(--grey-soft);
        }
    `,
    ButtonEdit:styled.button`
    padding:8px 40px;
    border:none;
    outline:none;
    cursor:pointer;
    color:var(--white-active);
    border-radius:3px;
    font-size:18px;
    transition:.2s;
    background-color:var(--blue-active);

    :hover {
        
    }
`,
    ButtonDelete:styled.button`
    padding:8px 40px;
    border:none;
    outline:none;
    cursor:pointer;
    color:var(--white-active);
    border-radius:3px;
    font-size:18px;
    transition:.2s;
    background-color:#FF5757;

    :hover {
        
    }
`,

    BoxResults:styled.section`
        display:flex;
        flex-direction:column;
        margin-top:20px;
        background-color:var(--white-active);
        width:100%;
        border-radius:10px;
        padding:20px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        margin-bottom:40px;
    `,

    BoxForm:styled.div`
        display:flex;
        flex-direction:column;
        width:100%;
        padding:10px;
        background-color:var(--white-active);
        margin-top:20px;
        border-radius:10px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    `,

    ButtonClose:styled.button`
        padding:6px 40px;
        background-color:rgba(191, 135, 86, 1);
        color:#FFF;
        font-family:Roboto;
        font-size:16px;
        border-radius:5px;
        outline:none;
        cursor:pointer;
        border:none;
        transition:0.2s;
        width:160px;
        
        :hover {
            background-color:rgba(191, 135, 86, 0.9);
        }
    `,

    LabelForms:styled.label`
        font-family:Roboto;
        font-size:18px;
        color:var(--brown-active);
        margin-bottom:10px;
        margin-top:10px;
    `,
    InfoForms:styled.label`
        font-family:Roboto;
        font-size:18px;
        color:var(--brown-active);
        margin-bottom:10px;
        margin-top:10px;
        margin-left:10px;
        font-weight:100;
    `,
    InputFormsTextArea:styled.textarea`
        padding:10px;
        outline:none;
        border-radius:5px;
        margin-bottom:10px;
        color:#666;
        height:200px;
        font-family:Roboto;
        font-size:16px;
        background-color:var(--white-active);
        border:1px solid rgba(191, 135, 86, 0.6);
    `,
    InfoDetailsViews:styled.h2`
        font-family:Roboto;
        color:var(--blue-strong);
        margin-bottom:10px;
    `,
    InputForms:styled.input`
        padding:10px;
        outline:none;
        border-radius:5px;
        margin-bottom:10px;
        color:#666;
        font-family:Roboto;
        font-size:16px;
        background-color:var(--white-active);
        border:1px solid rgba(191, 135, 86, 0.6);
    `,

    ButtonForms:styled.button`
        background-color:var(--blue-active);
        padding:8px 40px;
        color:#FFF;
        font-family:Roboto;
        font-size:16px;
        border-radius:5px;
        outline:none;
        cursor:pointer;
        border:none;
        transition:0.2s;
        margin-top:20px;

        :hover {
            background-color:rgba(81, 96, 140, 0.9);
        }
    `,

    BoxFilexImage:styled.div`
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
    `,
    BoxFilexImageArray:styled.div`
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        margin-left:-15px;
    `,
    FakeFileImge:styled.div`
        display:flex;
        justify-content:center;
        align-items:center;
        width:90px;
        height:90px;
        border-radius:8px;
        outline:none;
        border-color:transparent;
        cursor:pointer;
        font-size:11px;
        font-family:Roboto;
        text-align:center;
        color:#FFF;
        background-color:var(--blue-gray);
        margin-left:15px;    
    `,
    BoxImageLoadin:styled.div`
        width:90px;
        height:90px;
        display:flex;
        justify-content:center;
        align-items:center;
    `,
    FileImage:styled.img`
        width:40px;
        height:18px;
    `,
    InputFiles:styled.label`
        display:flex;
        justify-content:center;
        align-items:center;
        width:90px;
        height:90px;
        border-radius:8px;
        outline:none;
        border-color:transparent;
        cursor:pointer;
        font-size:11px;
        font-family:Roboto;
        text-align:center;
        color:#FFF;
        background-color:var(--blue-active);
        margin-top:10px;
    `,

    Files:styled.input`
        display:none;
    `,

    //#################################################### - Events - #######
    BoxEvents:styled.div`        
        width:100%;
    `,

    BoxFileImagePhoto: styled.div`
        position: relative;
    `,
    BoxFileImagePhotoClose:styled.div`
        display:flex;
        justify-content:center;
        align-items:center;
        width:30px;
        height:30px;
        background-color:#FFF;
        border-top-right-radius:6px;
        border-bottom-left-radius:6px;
        position: absolute;
        cursor:pointer;
        margin-top: -90px;
        margin-left: 70px;
    `,
    TitleClosePhoto:styled.strong`
        font-family:'Acme', sans-serif;
        color:#FF0000;
        font-size:18px;
    `,
    FileImagePhoto: styled.img`
        display:flex;
        justify-content:center;
        align-items:center;
        width:90px;
        height:90px;
        border-radius:8px;
        background-size:cover;
        margin-left:10px;
        margin-top: 10px;
    `,

    ImageEvent: styled.img`
        width: 120px;
        height: 100px;
        background-size: cover;
        border-radius: 5px;
    `,

    BoxInformationEvent:styled.div`
        margin-bottom:30px;
        border-bottom: 1px solid var(--blue-active);
        padding-bottom:15px;
    `,

    BoxEventResults:styled.div`
        display:flex;
        flex-direction: row;
        align-items:center;
    `,
    BoxEventResultsImage:styled.div`
        display:flex;
    `,
    BoxEventResultsDescription:styled.div`
        display:flex;
        flex-direction: column;
        padding-left:20px;
    `,

    //#################################################### - History -#######
    BoxHistory:styled.div`
        width:100%;
        height:100%;
    `,

    //################################################## - Link Youtube -####
    BoxLink:styled.div`
        width:100%;
    `,

    BoxLInkForm:styled.div`
        display:flex;
        flex-direction:column;
    `,

    BoxButton:styled.div`
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        padding-top:20px;
    `,

    BoxInformationLlinkYoutube:styled.div`
        margin-top:40px;
        display:flex;
        flex-direction:column;
    `,

    //#################################################### - Member - #######
    BoxMember:styled.div`
        width:100%;
        height:100%;
    `,

    //#################################################### - Partner -#######
    BoxPartner:styled.div`
        background-color:#00FF00;
        width:100%;
        height:100%;
    `,

    //#################################################### - Project -#######
    BoxProject:styled.div`
        width:100%;
        height:100%;
    `,

}