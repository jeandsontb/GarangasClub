import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

import useApi from '../../services/apiLaravel';
import S from './styles';

const Insertions = () => {

    const api = useApi();
    const history = useHistory();

    const [loading, setLoading] = useState(false);
    const [loadingButton, setLoadingButton] = useState(false);
    const [viewLink, setViewLink] = useState(false);
    const [viewEvents, setViewEvents] = useState(false);
    const [viewProjects, setViewProjects] = useState(false);
    const [viewMembers, setViewMembers] = useState(false);
    const [viewHistory, setViewHistory] = useState(false);
    const [viewPartners, setViewPartners] = useState(false);
    const [viewCarSale, setViewCarSale] = useState(true);

    const [formLink, setFormLink] = useState(false);
    const [dataLinkYoutube, setDataLinkYoutube] = useState({});
    const [formEditLink, setFormEditLink] = useState(false);
    const [formTitleLink, setFormTitleLink] = useState('');
    const [formUrlLink, setFormUrlLink] = useState('');
    const [editdataLinkYoutube, setEditDataLinkYoutube] = useState({});

    const [formEditEvent, setFormEditEvent] = useState(false);
    const [formEvent, setFormEvent] = useState(false);
    const [dataEvent, setDataEvent] = useState({});
    const [titleEvent, setTitleEvent] = useState('');
    const [descriptionEvent, setDescriptionEvent] = useState('');
    const [dateEvent, setDateEvent] = useState('');
    const [photoEvent, setPhotoEvent] = useState({});
    const [photoFile, setPhotoFile] = useState('');
    const [idEditFormEvent, setIdEditFormEvent] = useState(0);

    const [dataHistoric, setDataHistoric] = useState({});
    const [formHistoric, setFormHistoric] = useState(false);
    const [formEditHistoric, setFormEditHistoric] = useState(false);
    const [idHIstoric, setIdHistoric] = useState(0);
    const [titleHistoric, setTitleHistoric] = useState('');
    const [descriptionHistoric, setDescriptionHistoric] = useState('');
    const [photoHistoric, setPhotoHistoric] = useState({});
    const [filePhotoHistoric, setFilePhotoHistoric] = useState('');

    const [dataProject, setDataProject] = useState({});
    const [idProject, setIdProject] = useState(0);
    const [formProject, setFormProject] = useState(false);
    const [formEditProject, setFormEditProject] = useState(false);
    const [photoProject, setPhotoProject] = useState({});
    const [photoFileProject, setPhotoFileProject] = useState('');
    const [photoFilesProject, setPhotoFilesProject] = useState([]);
    const [photoFilesLoadingProjects, setPhotoFilesLoadingProjects] = useState([]);
    const [nameProject, setNameProject] = useState('');
    const [titleProject, setTitleProject] = useState('');
    const [descriptionProject, setDescriptionProject] = useState('');
    const [futureProject, setFutureProject] = useState('');

    const [dataMember, setDataMember] = useState({});
    const [idMember, setIdMember] = useState(0);
    const [formMember, setFormMember] = useState(false);
    const [formEditMember, setFormEditMember] = useState(false);
    const [photoMember, setPhotoMember] = useState({});
    const [photoFileMember, setPhotoFileMember] = useState('');
    const [photoFilesMember, setPhotoFilesMember] = useState([]);
    const [photoFilesLoadingMember, setPhotoFilesLoadingMember] = useState([]);
    const [nameMember, setNameMember] = useState('');
    const [titleMember, setTitleMember] = useState('');
    const [descriptionMember, setDescriptionMember] = useState('');


    //#################################################################### - EFFECT - ###########
 
    useEffect(() => {
        const checkLogin = async () => {
            if(api.getToken()){
                setLoading(true);
                const result = await api.validateToken();                
                setLoading(false);
                if(result.error === '') {
                    history.push('/insertions');
                } else {
                    alert(result.error);
                    history.push('/admin');                    
                }
            } else {
                history.push('/admin');
            }            
        }    
        checkLogin();
        getDataLinkYoutube();
        getDataEvent();
        getDataHistoric();
        getDataProject();
        getDataMember();
    }, []);


    //##################################################################### - FUNCTIONS - #########

    //******************************** -- pega as informações para preencher os dados -- ****************
    //************* INFORMAÇÃO DOS LINKS *******/
    const getDataLinkYoutube = async () => {
        setDataLinkYoutube({});
        const result = await api.getUrlLink();
        if(result.error === ''){
            setDataLinkYoutube(result.data);
        } else {
            alert(result.error);
        }
    }

    //************* INFORMAÇÃO DOS EVENTOS *******/
    const getDataEvent = async () => {
        setDataEvent({});
        const result = await api.getEvent();
        if(result.error === ''){
            setDataEvent(result.data);
        } else {
            alert(result.error);
        }
    }

    const getDataHistoric = async () => {
        setDataHistoric({});
        const result = await api.getHistoric();
        if(result.error === ''){
            setDataHistoric(result.data);
        } else {
            alert(result.error);
        }
    }

    const getDataProject = async () => {
        setDataProject({});
        const result = await api.getProjects();
        if(result.error === '') {
            setDataProject(result.data);
        } else {
            alert(result.error);
        }
    }

    const getDataMember = async () => {
        setDataMember({});
        const result = await api.getMembers();
        if(result.error === '') {
            setDataMember(result.data);
        } else {    
            alert(result.error);
        }
    }
    
    const handleLogoutClick = async () => {
        await api.logout();
        history.push('/admin');
    }

    //************************************************** -- função para os menus -- ****************
    const handleLinkClick = (type) => {
        switch(type) {
            case 'viewCarSale':
                setViewEvents(false);
                setViewHistory(false);
                setViewLink(false);
                setViewMembers(false);
                setViewPartners(false);
                setViewProjects(false);
                setFormLink(false);
                setViewCarSale(true);
            break;
            case 'viewEvents':
                setViewCarSale(false);
                setViewHistory(false);
                setViewLink(false);
                setViewMembers(false);
                setViewPartners(false);
                setViewProjects(false);
                setFormLink(false);
                setViewEvents(true);
            break;
            case 'viewHistory':
                setViewCarSale(false);
                setViewEvents(false);
                setViewLink(false);
                setViewMembers(false);
                setViewPartners(false);
                setViewProjects(false);
                setFormLink(false);
                setViewHistory(true);
            break;
            case 'viewLink':
                setViewCarSale(false);
                setViewEvents(false);
                setViewHistory(false);
                setViewMembers(false);
                setViewPartners(false);
                setViewProjects(false);
                setFormLink(false);
                setViewLink(true);
            break;
            case 'viewMembers':
                setViewCarSale(false);
                setViewEvents(false);
                setViewHistory(false);
                setViewLink(false);
                setViewPartners(false);
                setViewProjects(false);
                setFormLink(false);
                setViewMembers(true);
            break;
            case 'viewPartners':
                setViewCarSale(false);
                setViewEvents(false);
                setViewHistory(false);
                setViewLink(false);
                setViewMembers(false);
                setViewProjects(false);
                setFormLink(false);
                setViewPartners(true);
            break;
            case 'viewProjects':
                setViewCarSale(false);
                setViewEvents(false);
                setViewHistory(false);
                setViewLink(false);
                setViewMembers(false);
                setViewPartners(false);
                setFormLink(false);
                setViewProjects(true);
            break;
        }
    }

     //*************************** -- funções para mostrar e ocultar formulário -- ****************
    const handleAddLinkFormClick = () => {
        setFormLink(true);
    }

    const handleCloseFormClick = () => {
        setFormLink(false);
        setFormEditLink(false);
        setFormEvent(false);
        setFormHistoric(false);
        setFormEditHistoric(false);
        setFormProject(false);
        setFormEditProject(false);
        setFormTitleLink('');
        setFormUrlLink('');
        setFormProject(false);
        setNameProject('');
        setTitleProject('');                
        setDescriptionProject('');
        setFutureProject('');
        setPhotoFileProject('')
        setPhotoFilesProject([]);
        getDataProject();
        setFormMember(false);
        setFormEditMember(false);
        setNameMember('');
        setTitleMember('');                
        setDescriptionMember('');
        setPhotoFileMember('')
        setPhotoFilesMember([]);
    }

    const handleEditLinkYoutube = (data) => {
        setFormTitleLink(data.title);
        setFormUrlLink(data.url);
        setEditDataLinkYoutube(data);
        setFormEditLink(true);
    }


    //********************************************** -- funções api link Youtube -- ****************
    const sendFormUrlLink = async () => {
        if(formTitleLink !== '' && formUrlLink !== '') {
            setLoadingButton(true);
            const result = await api.addUrlLink(formTitleLink, formUrlLink);
            setLoadingButton(false);
            if(result.error === '') {
                setLoadingButton(false);
                setFormLink(false);
                setFormTitleLink('');
                setFormUrlLink('');
                getDataLinkYoutube();
            } else {
                alert(result.error);
            }
        } else {
            alert("Preencha todos os campos do formulário");
        }
    }
    
    const sendFormEditUrlLink = async (id) => {
        if(formTitleLink !== '' && formUrlLink !== '') {
            setLoadingButton(true);
            const result = await api.setUlrLink(id, formTitleLink, formUrlLink);
            setLoadingButton(false);
            if(result.error === '') {
                setLoadingButton(false);
                setFormLink(false);
                setFormEditLink(false);
                setFormTitleLink('');
                setFormUrlLink('');
                getDataLinkYoutube();
            } else {
                alert(result.error);
            }
        } else {
            alert("Preencha todos os campos do formulário");
        }
    }

    const handleRemoveLinkYoutube = async (id) => {
        if(id) {
            setLoadingButton(true);
            const result = await api.removeLinkMovie(id);
            setLoadingButton(false);
            if(result.error === '') {
                setLoadingButton(false);
                setFormTitleLink('');
                setFormUrlLink('');
                getDataLinkYoutube();
            } else {
                alert(result.error);
            }
        } else {
            alert('Não foi possível alterar a postagem.');
        }
    }
    
    
    //############################### FUNÇÕES PARA EVENTOS #########################################

    //********************************************** -- funções api Eventos -- *********************

    const sendValuesFormEvent = async () => {
        if(photoFile !== '' && titleEvent !== '' && descriptionEvent !== '' && dateEvent !== '') {
            setLoadingButton(true);

            const result = await api.addEvent(photoFile, titleEvent, descriptionEvent, dateEvent);
            setLoadingButton(false);
            if(result.error === '') {
                setFormEvent(false);
                setLoadingButton(false);
                setFormLink(false);
                setFormTitleLink('');
                setFormUrlLink('');
                setTitleEvent('');
                setDescriptionEvent('');
                setDateEvent('');
                setPhotoFile('');
                setPhotoEvent({});
                getDataEvent();
            } else {
                alert(result.error);
            }
        } else {
            alert("Preencha todos os campos do formulário");
        }
    }

    
    const handleImageEventForm = async (file) => { 
        if(file) {
            setPhotoEvent(file.target.files[0].name);
            let fileEvent = await api.addFileEvent(file.target.files[0]);
            setPhotoFile(fileEvent.photo);
        }
    }

    const sendValuesFormEditEvent = async (id) => {
        if(photoFile !== '' && titleEvent !== '' && descriptionEvent !== '' && dateEvent !== '') {
            setLoadingButton(true);

            const result = await api.addEditEvent(id, photoFile, titleEvent, descriptionEvent, dateEvent);
            setLoadingButton(false);
            if(result.error === '') {
                setFormEvent(false);
                setFormEditEvent(false);
                setLoadingButton(false);
                setFormLink(false);
                setFormTitleLink('');
                setFormUrlLink('');
                setTitleEvent('');
                setDescriptionEvent('');
                setDateEvent('');
                setPhotoFile('');
                setPhotoEvent({});
                getDataEvent();
            } else {
                alert(result.error);
            }
        } else {
            alert("Preencha todos os campos do formulário");
        }
    }

    const handleRemoveEvent = async (id) => {
        if(id) {
            setLoadingButton(true);
            const result = await api.removeEvent(id);
            setLoadingButton(false);
            if(result.error === '') {
                setFormEvent(false);
                setFormEditEvent(false);
                setLoadingButton(false);
                setFormLink(false);
                setFormTitleLink('');
                setFormUrlLink('');
                setTitleEvent('');
                setDescriptionEvent('');
                setDateEvent('');
                setPhotoFile('');
                setPhotoEvent({});
                getDataEvent();
            } else {
                alert(result.error);
            }
        } else {
            alert('Não foi possível alterar a postagem.');
        }
    }
    
    //********************************************* -- funções operacionais dos eventos ************
    const handleOpenFormEventClick = () => {
        setFormEvent(true);
    }

    const handleCloseFormEditClick = () => {
        setFormEditEvent(false);
    }
    
    const handleEditEvent = (data) => {
        setFormEditEvent(true);
        setIdEditFormEvent(data.id);
        setPhotoFile(data.img);
        setTitleEvent(data.title);
        setDescriptionEvent(data.description);
        setDateEvent(data.date);
    }
    
    //############################### FUNÇÕES PARA HISTÓRIAS #########################################

    //********************************************** -- funções api Historia -- *********************

    const sendValuesFormHistoric = async () => {
        if(filePhotoHistoric !== '' && titleHistoric !== '' && descriptionHistoric !== '') {
            setLoadingButton(true);

            const result = await api.addHistoric(filePhotoHistoric, titleHistoric, descriptionHistoric);
            setLoadingButton(false);
            if(result.error === '') {
                setFormHistoric(false);
                setFormEditHistoric(false);
                setLoadingButton(false);
                setTitleHistoric('');
                setDescriptionHistoric('');
                setFilePhotoHistoric('');
                setPhotoHistoric({});
                getDataHistoric();
            } else {
                alert(result.error);
            }
        } else {
            alert("Preencha todos os campos do formulário");
        }
    }

    const sendValuesFormAddHistoric = async (id) => {
        if(filePhotoHistoric !== '' && titleHistoric !== '' && descriptionHistoric !== '') {
            setLoadingButton(true);

            const result = await api.addEditHistoric(id, filePhotoHistoric, titleHistoric, descriptionHistoric);
            setLoadingButton(false);
            if(result.error === '') {
                setFormHistoric(false);
                setFormEditHistoric(false);
                setLoadingButton(false);
                setTitleHistoric('');
                setDescriptionHistoric('');
                setFilePhotoHistoric('');
                setPhotoHistoric({});
                getDataHistoric();
            } else {
                alert(result.error);
            }
        } else {
            alert("Preencha todos os campos do formulário");
        }
    }

    const handleRemoveHistoric = async (id) => {
        if(id) {
            setLoadingButton(true);
            const result = await api.removeHistoric(id);
            setLoadingButton(false);
            if(result.error === '') {
                setFormHistoric(false);
                setFormEditHistoric(false);
                setLoadingButton(false);
                setTitleHistoric('');
                setDescriptionHistoric('');
                setFilePhotoHistoric('');
                setPhotoHistoric({});
                getDataHistoric();
            } else {
                alert(result.error);
            }
        } else {
            alert('Não foi possível alterar a postagem.');
        }
    }

    const handleImageHistoricForm = async (file) => {
        if(file) {
            setPhotoHistoric(file.target.files[0].name);
            let fileHistoric = await api.addFileHistoric(file.target.files[0]);
            setFilePhotoHistoric(fileHistoric.photo);
        }
    }

    //*************************************** -- funções operacional Historia -- *********************
    const handleOpenHistoricClick = () => {
        setFormHistoric(true);
    }

    const handleEditHistoric = (data) => {
        setFormEditHistoric(true);
        setIdHistoric(data.id);
        setFilePhotoHistoric(data.image);
        setTitleHistoric(data.title);
        setDescriptionHistoric(data.description);
    }
    
    //############################### FUNÇÕES PARA PROJECTS #########################################

    //********************************************** -- funções api Project -- *********************


    const handleImageProjectForm = async (file) => {
        if(file) {
            setPhotoFileProject('');
            setPhotoProject(file.target.files[0].name);
            let fileProject = await api.addFileProject(file.target.files[0]);
            setPhotoFileProject(fileProject.photo);
        }
    }

    const handleImagesProjectForm = async (file) => {
        file.persist();
        if(file) {
            let countFiles = [];
            for(let i = 0; i < file.target.files.length; i++){
                countFiles.push(i);
            }
            setPhotoFilesLoadingProjects(countFiles);

            let list = [...photoFilesProject];
            for(let i = 0; i < file.target.files.length; i++) {                
                let result = await api.addFileProject(file.target.files[i]);
                if(result.error === '') {
                    list.push(result.photo);
                } else {
                    alert(result.error);
                }
            }
            setPhotoFilesLoadingProjects([]);
            setPhotoFilesProject(list.reverse());            
        }
    }

    const handlePhotoArrayRemove = (url) => {
        let list = [...photoFilesProject];
        list = list.filter(urls => urls !== url);
        setPhotoFilesProject(list);
    }

    const sendValuesFormProject = async () => {
        if(photoFileProject !== '' && nameProject !== '' && titleProject !== '' && descriptionProject !== '') {
            setLoadingButton(true);

            const result = await api.addProject(photoFileProject, photoFilesProject, nameProject, titleProject, descriptionProject, futureProject);
            setLoadingButton(false);
            if(result.error === '') {
                setFormProject(false);
                setPhotoFileProject('');
                setNameProject('');
                setTitleProject('');                
                setDescriptionProject('');
                setFutureProject('');
                setPhotoFileProject('')
                setPhotoFilesProject([]);
                getDataProject();
            } else {
                alert(result.error);
            }
        } else {
            alert("Preencha todos os campos do formulário");
        }
    }

    const sendValuesFormEditProject = async (id) => {
        if(photoFileProject !== '' && nameProject !== '' && titleProject !== '' && descriptionProject !== '') {
            setLoadingButton(true);

            const result = await api.addEditProject(id, photoFileProject, photoFilesProject, nameProject, titleProject, descriptionProject, futureProject);
            setLoadingButton(false);
            if(result.error === '') {
                setFormProject(false);
                setFormEditProject(false);
                setPhotoFileProject('');
                setNameProject('');
                setTitleProject('');                
                setDescriptionProject('');
                setFutureProject('');
                setPhotoFileProject('')
                setPhotoFilesProject([]);
                getDataProject();
            } else {
                alert(result.error);
            }
        } else {
            alert("Preencha todos os campos do formulário");
        }
    }
    

    const handleRemoveProject = async (id) => {
        if(id) {
            setLoadingButton(true);
            const result = await api.removeProject(id);
            setLoadingButton(false);
            if(result.error === '') {
                setFormProject(false);
                setNameProject('');
                setTitleProject('');                
                setDescriptionProject('');
                setFutureProject('');
                setPhotoFileProject('')
                setPhotoFilesProject([]);
                getDataProject();
            } else {
                alert(result.error);
            }
        } else {
            alert('Não foi possível alterar a postagem.');
        }
    }

    //*************************************** -- funções operacional Project -- *********************
    const handleOpenFormProjectClick = () => {
        setFormProject(true);
    }

    const handleEditProject = async (data) => {
        setFormEditProject(true);
        setIdProject(data.id);
        setPhotoFileProject(data.cover);
        setPhotoFilesProject(data.photos);
        setNameProject(data.name);
        setTitleProject(data.title);
        setDescriptionProject(data.description);
        setFutureProject(data.futureprojects);
    }


    //############################### FUNÇÕES PARA Member #########################################

    //********************************************** -- funções api Member -- *********************

    const handleImageMemberForm = async (file) => {
        if(file) {
            setPhotoFileMember('');
            setPhotoMember(file.target.files[0].name);
            let fileMember = await api.addFileMember(file.target.files[0]);
            setPhotoFileMember(fileMember.photo);
        }
    }

    const handleImagesMemberForm = async (file) => {
        file.persist();
        if(file) {
            let countFiles = [];
            for(let i = 0; i < file.target.files.length; i++){
                countFiles.push(i);
            }
            setPhotoFilesLoadingMember(countFiles);

            let list = [...photoFilesMember];
            for(let i = 0; i < file.target.files.length; i++) {                
                let result = await api.addFileMember(file.target.files[i]);
                if(result.error === '') {
                    list.push(result.photo);
                } else {
                    alert(result.error);
                }
            }
            setPhotoFilesLoadingMember([]);
            setPhotoFilesMember(list.reverse());            
        }
    }

    const sendValuesFormMember = async () => {
        if(photoFileMember !== '' && nameMember !== '' && titleMember !== '' && descriptionMember !== '') {
            setLoadingButton(true);

            const result = await api.addMember(photoFileMember, photoFilesMember, nameMember, titleMember, descriptionMember);
            setLoadingButton(false);
            if(result.error === '') {
                setFormMember(false);
                setPhotoFileMember('');
                setNameMember('');
                setTitleMember('');                
                setDescriptionMember('');
                setPhotoFileMember('')
                setPhotoFilesMember([]);
                getDataMember();
            } else {
                alert(result.error);
            }
        } else {
            alert("Preencha todos os campos do formulário");
        }
    }

    const sendValuesFormEditMember = async (id) => {
        if(photoFileMember !== '' && nameMember !== '' && titleMember !== '' && descriptionMember !== '') {
            setLoadingButton(true);

            const result = await api.addEditMember(id, photoFileMember, photoFilesMember, nameMember, titleMember, descriptionMember);
            setLoadingButton(false);
            if(result.error === '') {
                setFormMember(false);
                setFormEditMember(false);
                setPhotoFilesLoadingMember(false);
                setPhotoFileMember('');
                setNameMember('');
                setTitleMember('');                
                setDescriptionMember('');
                setPhotoFileMember('')
                setPhotoFilesMember([]);
                getDataMember();
            } else {
                alert(result.error);
            }
        } else {
            alert("Preencha todos os campos do formulário");
        }
    }
    

    const handleRemoveMember = async (id) => {
        if(id) {
            setLoadingButton(true);
            const result = await api.removeMember(id);
            setLoadingButton(false);
            if(result.error === '') {
                setFormMember(false);
                setNameMember('');
                setTitleMember('');                
                setDescriptionMember('');
                setPhotoFileMember('')
                setPhotoFilesMember([]);
                getDataMember();
            } else {
                alert(result.error);
            }
        } else {
            alert('Não foi possível alterar a postagem.');
        }
    }


    //*************************************** -- funções operacional Member -- *********************
    const handleOpenFormMemberClick = () => {
        setFormMember(true);
        setNameMember('');
        setTitleMember('');                
        setDescriptionMember('');
        setPhotoFileMember('')
        setPhotoFilesMember([]);
    }

    const handlePhotoArrayRemoveMember = (url) => {
        let list = [...photoFilesMember];
        list = list.filter(urls => urls !== url);
        setPhotoFilesMember(list);
    }

    const handleEditMember = async (data) => {
        setFormEditMember(true);
        setIdMember(data.id);
        setPhotoFileMember(data.cover);
        setPhotoFilesMember(data.photos);
        setNameMember(data.name);
        setTitleMember(data.title);
        setDescriptionMember(data.description);
    }

    //############################################################################ - BODY - ########

    return (
        <>
          <S.Container>
            <S.BoxLeft>
                <S.BoxViews>
                    <S.BoxTitle>
                        <S.InsertionTitle>Publicações</S.InsertionTitle>
                    </S.BoxTitle>
                        <S.LinkText onClick={() => handleLinkClick('viewCarSale')} > Carros à Venda</S.LinkText>
                        <S.LinkText onClick={() => handleLinkClick('viewEvents')} > Eventos</S.LinkText>
                        <S.LinkText onClick={() => handleLinkClick('viewHistory')} > História</S.LinkText>
                        <S.LinkText onClick={() => handleLinkClick('viewLink')} > Link Youtube</S.LinkText>
                        <S.LinkText onClick={() => handleLinkClick('viewMembers')} > Membros</S.LinkText>
                        <S.LinkText onClick={() => handleLinkClick('viewPartners')} > Parceiros</S.LinkText>
                        <S.LinkText onClick={() => handleLinkClick('viewProjects')} > Projetos</S.LinkText>
                </S.BoxViews>
                <S.Logout type="button" onClick={handleLogoutClick} >Sair</S.Logout>
            </S.BoxLeft>

            <S.BoxRight>
{/*## Carros a venda ########################################################################## */}
                {viewCarSale &&
                    <S.BoxCarSale>
                        <S.TitleBoxesViews>CARROS À VENDA</S.TitleBoxesViews>


                        <S.BoxResults></S.BoxResults>

                        <S.ButtonAdicionar>Adicionar Carro</S.ButtonAdicionar>
                    </S.BoxCarSale>  
                }
{/*## Eventos ################################################################################# */}
                {viewEvents &&
                    <S.BoxEvents>
                        <S.TitleBoxesViews>Eventos</S.TitleBoxesViews>
                    {formEvent &&
                        <S.BoxForm>                            
                            <S.ButtonClose type="button" onClick={handleCloseFormClick} >
                                Fechar
                            </S.ButtonClose>
                            

                            <S.BoxForm style={{boxShadow: 'none'}}>
                                <S.LabelForms>Adicione uma foto do Evento</S.LabelForms>

                                <S.BoxFilexImage>
                                     <S.InputFiles htmlFor="image" >
                                        Adicionar <br /> imagem
                                     </S.InputFiles>

                                    {photoEvent && photoEvent.length > 0 && photoFile.length === 0 &&
                                        <S.BoxImageLoadin>
                                            <S.FileImage alt="Load foto" src="../../assets/ajax-loader.gif" />
                                        </S.BoxImageLoadin>
                                    }
                                    {photoFile && photoFile.length > 0 &&
                                        <S.FileImagePhoto alt="Foto do evento" src={photoFile} />                                    
                                    }
                                     
                                    <S.Files 
                                        onChange={handleImageEventForm} 
                                        name="file" 
                                        type="file" 
                                        id="image" 
                                    />
                                </S.BoxFilexImage>

                                <S.LabelForms>Digite o título:</S.LabelForms>
                                <S.InputForms 
                                    type="text" 
                                    value={titleEvent}
                                    onChange={e => setTitleEvent(e.target.value)} 
                                />
                                <S.LabelForms>Digite a descrição:</S.LabelForms>
                                <S.InputForms 
                                    type="text" 
                                    value={descriptionEvent}
                                    onChange={e => setDescriptionEvent(e.target.value)} 
                                />
                                <S.LabelForms>Digite a data do evento:</S.LabelForms>
                                <S.InputForms 
                                    type="text" 
                                    value={dateEvent}
                                    onChange={e => setDateEvent(e.target.value)} 
                                />
                                <S.ButtonForms type="button" onClick={sendValuesFormEvent} >
                                    {loadingButton ? 'Enviando Dados' : 'Enviar Dados'} 
                                </S.ButtonForms>
                            </S.BoxForm>                                
                        </S.BoxForm>
                    }

                    {formEditEvent &&
                        <S.BoxForm>                            
                            <S.ButtonClose type="button" onClick={handleCloseFormEditClick} >
                                Fechar
                            </S.ButtonClose>
                            

                            <S.BoxForm style={{boxShadow: 'none'}}>
                                <S.LabelForms>Adicione uma foto do Evento</S.LabelForms>

                                <S.BoxFilexImage>
                                     <S.InputFiles htmlFor="image" >
                                        Adicionar <br /> imagem
                                     </S.InputFiles>

                                    {photoEvent && photoEvent.length > 0 && photoFile.length === 0 &&
                                        <S.BoxImageLoadin>
                                            <S.FileImage alt="Load foto" src="../../assets/ajax-loader.gif" />
                                        </S.BoxImageLoadin>
                                    }
                                    {photoFile && photoFile.length > 0 &&
                                        <S.FileImagePhoto alt="Foto do evento" src={photoFile} />                                    
                                    }
                                     
                                    <S.Files 
                                        onChange={handleImageEventForm} 
                                        name="file" 
                                        type="file" 
                                        id="image" 
                                    />
                                </S.BoxFilexImage>

                                <S.LabelForms>Digite o título:</S.LabelForms>
                                <S.InputForms 
                                    type="text" 
                                    value={titleEvent}
                                    onChange={e => setTitleEvent(e.target.value)} 
                                />
                                <S.LabelForms>Digite a descrição:</S.LabelForms>
                                <S.InputForms 
                                    type="text" 
                                    value={descriptionEvent}
                                    onChange={e => setDescriptionEvent(e.target.value)} 
                                />
                                <S.LabelForms>Digite a data do evento:</S.LabelForms>
                                <S.InputForms 
                                    type="text" 
                                    value={dateEvent}
                                    onChange={e => setDateEvent(e.target.value)} 
                                />
                                <S.ButtonForms 
                                    type="button" 
                                    onClick={() => sendValuesFormEditEvent(idEditFormEvent)}
                                >
                                    {loadingButton ? 'Enviando Dados' : 'Enviar Dados'} 
                                </S.ButtonForms>
                            </S.BoxForm>                                
                        </S.BoxForm>
                    }


                        <S.BoxResults>
                        {dataEvent.length === 0 && 
                            <>
                              <S.LabelForms>Não existe publicações no momento!</S.LabelForms>
                            </>
                        }

                        {dataEvent.length > 0 && dataEvent.map((item, index) => (
                            <S.BoxInformationEvent key={index}>
                                <S.BoxEventResults>
                                    <S.BoxEventResultsImage>
                                        <S.ImageEvent alt="Evento" src={item.img} />
                                    </S.BoxEventResultsImage>
                                    <S.BoxEventResultsDescription>
                                        <S.LabelForms>{item.title}</S.LabelForms>
                                        <S.InfoForms>{item.description}</S.InfoForms>
                                        <S.InfoForms>{item.date}</S.InfoForms>
                                    </S.BoxEventResultsDescription>
                                </S.BoxEventResults>
                               
    
                                <S.BoxButton>
                                    <S.ButtonEdit 
                                        onClick={() => handleEditEvent(item)} >
                                        Alterar Publicação
                                    </S.ButtonEdit>
                                    <S.ButtonDelete onClick={() => handleRemoveEvent(item.id)}>
                                        {loadingButton ? 'Removendo Publicação' : 'Remover Publicação'}
                                    </S.ButtonDelete>
                                </S.BoxButton>
                            </S.BoxInformationEvent>
                        ))}
                        </S.BoxResults>

                        <S.ButtonAdicionar onClick={handleOpenFormEventClick} >
                            Adicionar Evento
                        </S.ButtonAdicionar>
                    </S.BoxEvents>
                }
{/*## História ################################################################################# */}
                {viewHistory && 
                    <S.BoxHistory>
                        <S.TitleBoxesViews>História</S.TitleBoxesViews>

                        {formHistoric &&
                            <S.BoxForm>                            
                                <S.ButtonClose type="button" onClick={handleCloseFormClick} >
                                    Fechar
                                </S.ButtonClose>
                                

                                <S.BoxForm style={{boxShadow: 'none'}}>
                                    <S.LabelForms>Adicione uma foto para a história</S.LabelForms>

                                    <S.BoxFilexImage>
                                        <S.InputFiles htmlFor="image" >
                                            Adicionar <br /> imagem
                                        </S.InputFiles>

                                        {photoHistoric && photoHistoric.length > 0 && filePhotoHistoric.length === 0 &&
                                            <S.BoxImageLoadin>
                                                <S.FileImage alt="Load foto" src="../../assets/ajax-loader.gif" />
                                            </S.BoxImageLoadin>
                                        }
                                        {filePhotoHistoric && filePhotoHistoric.length > 0 &&
                                            <S.FileImagePhoto alt="Foto da história" src={filePhotoHistoric} />                                    
                                        }
                                        
                                        <S.Files 
                                            onChange={handleImageHistoricForm} 
                                            name="file" 
                                            type="file" 
                                            id="image" 
                                        />
                                    </S.BoxFilexImage>

                                    <S.LabelForms>Digite o título:</S.LabelForms>
                                    <S.InputForms 
                                        type="text" 
                                        value={titleHistoric}
                                        onChange={e => setTitleHistoric(e.target.value)} 
                                    />
                                    <S.LabelForms>Digite a descrição:</S.LabelForms>
                                    <S.InputFormsTextArea 
                                        type="text" 
                                        value={descriptionHistoric}
                                        onChange={e => setDescriptionHistoric(e.target.value)} 
                                    >                                        
                                    </S.InputFormsTextArea>
                                    <S.ButtonForms type="button" onClick={sendValuesFormHistoric} >
                                        {loadingButton ? 'Enviando Dados' : 'Enviar Dados'} 
                                    </S.ButtonForms>
                                </S.BoxForm>                                
                            </S.BoxForm>
                        }

                        {formEditHistoric &&
                            <S.BoxForm>                            
                                <S.ButtonClose type="button" onClick={handleCloseFormClick} >
                                    Fechar
                                </S.ButtonClose>
                                

                                <S.BoxForm style={{boxShadow: 'none'}}>
                                    <S.LabelForms>Adicione uma foto para a história</S.LabelForms>

                                    <S.BoxFilexImage>
                                        <S.InputFiles htmlFor="image" >
                                            Adicionar <br /> imagem
                                        </S.InputFiles>

                                        {photoHistoric && photoHistoric.length > 0 && filePhotoHistoric.length === 0 &&
                                            <S.BoxImageLoadin>
                                                <S.FileImage alt="Load foto" src="../../assets/ajax-loader.gif" />
                                            </S.BoxImageLoadin>
                                        }
                                        {filePhotoHistoric && filePhotoHistoric.length > 0 &&
                                            <S.FileImagePhoto alt="Foto da história" src={filePhotoHistoric} />                                    
                                        }
                                        
                                        <S.Files 
                                            onChange={handleImageHistoricForm} 
                                            name="file" 
                                            type="file" 
                                            id="image" 
                                        />
                                    </S.BoxFilexImage>

                                    <S.LabelForms>Digite o título:</S.LabelForms>
                                    <S.InputForms 
                                        type="text" 
                                        value={titleHistoric}
                                        onChange={e => setTitleHistoric(e.target.value)} 
                                    />
                                    <S.LabelForms>Digite a descrição:</S.LabelForms>
                                    <S.InputFormsTextArea 
                                        type="text" 
                                        value={descriptionHistoric}
                                        onChange={e => setDescriptionHistoric(e.target.value)} 
                                    >                                        
                                    </S.InputFormsTextArea>
                                    <S.ButtonForms 
                                        type="button" 
                                        onClick={() => sendValuesFormAddHistoric(idHIstoric)} 
                                    >
                                        {loadingButton ? 'Enviando Dados' : 'Enviar Dados'} 
                                    </S.ButtonForms>
                                </S.BoxForm>                                
                            </S.BoxForm>
                        }
                        


                        <S.BoxResults>

                            {dataHistoric.length === 0 && 
                                <>
                                <S.LabelForms>Não existe publicações no momento!</S.LabelForms>
                                </>
                            }

                            {dataHistoric.length > 0 && dataHistoric.map((item, index) => (
                                <S.BoxInformationEvent key={index}>
                                    <S.BoxEventResults>
                                        <S.BoxEventResultsImage>
                                            <S.ImageEvent alt="História" src={item.image} />
                                        </S.BoxEventResultsImage>
                                        <S.BoxEventResultsDescription>
                                            <S.LabelForms>{item.title}</S.LabelForms>
                                            <S.InfoForms>{item.description}</S.InfoForms>
                                        </S.BoxEventResultsDescription>
                                    </S.BoxEventResults>
                                
        
                                    <S.BoxButton>
                                        <S.ButtonEdit 
                                            onClick={() => handleEditHistoric(item)} >
                                            Alterar Publicação
                                        </S.ButtonEdit>
                                        <S.ButtonDelete onClick={() => handleRemoveHistoric(item.id)}>
                                            {loadingButton ? 'Removendo Publicação' : 'Remover Publicação'}
                                        </S.ButtonDelete>
                                    </S.BoxButton>
                                </S.BoxInformationEvent>
                            ))}
                        </S.BoxResults>

                        <S.ButtonAdicionar onClick={handleOpenHistoricClick} >
                            Adicionar História
                        </S.ButtonAdicionar>
                    </S.BoxHistory>
                }
{/*## Link Youtube ############################################################################## */}
                {viewLink &&
                    <S.BoxLink>
                        <S.TitleBoxesViews>Link do Youtube</S.TitleBoxesViews>                        
                    {formLink &&
                        <S.BoxForm>                            
                            <S.ButtonClose type="button" onClick={handleCloseFormClick} >
                                Fechar
                            </S.ButtonClose>
                            

                            <S.BoxForm style={{boxShadow: 'none'}}>
                                <S.LabelForms>Digite detalhes e quando ocorreu o evento</S.LabelForms>
                                <S.InputForms 
                                    type="text" 
                                    value={formTitleLink}
                                    onChange={e => setFormTitleLink(e.target.value)} 
                                />
                                <S.LabelForms>Copie e cole a url do youtube</S.LabelForms>
                                <S.InputForms 
                                    type="text" 
                                    value={formUrlLink}
                                    onChange={e => setFormUrlLink(e.target.value)} 
                                />
                                <S.ButtonForms type="button" onClick={sendFormUrlLink} >
                                    {loadingButton ? 'Enviando Dados' : 'Enviar Dados'} 
                                </S.ButtonForms>
                            </S.BoxForm>                                
                        </S.BoxForm>
                    }
                    {formEditLink &&
                        <S.BoxForm>                            
                            <S.ButtonClose type="button" onClick={handleCloseFormClick} >
                                Fechar
                            </S.ButtonClose>
                            

                            <S.BoxForm style={{boxShadow: 'none'}}>                                
                                <S.LabelForms>Digite detalhes e quando ocorreu o evento</S.LabelForms>
                                <S.InputForms 
                                    type="text" 
                                    value={formTitleLink}
                                    onChange={e => setFormTitleLink(e.target.value)} 
                                />
                                <S.LabelForms>Copie e cole a url do youtube</S.LabelForms>
                                <S.InputForms 
                                    type="text" 
                                    value={formUrlLink}
                                    onChange={e => setFormUrlLink(e.target.value)} 
                                />
                                <S.ButtonForms 
                                    type="button" 
                                    onClick={() => sendFormEditUrlLink(editdataLinkYoutube.id) }
                                >
                                    {loadingButton ? 'Alterando Dados' : 'Alterar Dados'} 
                                </S.ButtonForms>
                            </S.BoxForm>                                
                        </S.BoxForm>
                    }

                        <S.BoxResults>
                            {dataLinkYoutube.length === 0 && 
                            <>
                                <S.InfoDetailsViews>OBS. Nessa área só pode haver uma postagem! Se já
                                    existir clique em alterar para atualizar a publicação.
                                </S.InfoDetailsViews>
                                <S.LabelForms>Não existe publicações no momento!</S.LabelForms>
                            </>
                            }
                            {dataLinkYoutube.length > 0 && dataLinkYoutube.map((item, index) => (
                                    <S.BoxInformationLlinkYoutube key={index}>
                                        <S.InfoDetailsViews >OBS. Nessa área só pode haver uma postagem! Se já
                                            existir clique em alterar para atualizar a publicação.
                                        </S.InfoDetailsViews>
                                        <S.LabelForms>Descrição do vídeo:</S.LabelForms>
                                        <S.InfoForms>{item.title}</S.InfoForms>
                                        <S.LabelForms>Link do vídeo:</S.LabelForms>
                                        <S.InfoForms>{item.url}</S.InfoForms>
    
                                        <S.BoxButton>
                                            <S.ButtonEdit 
                                                onClick={() => handleEditLinkYoutube(item)} >
                                                Alterar Publicação
                                            </S.ButtonEdit>
                                            <S.ButtonDelete onClick={() => handleRemoveLinkYoutube(item.id)}>
                                            {loadingButton ? 'Removendo Publicação' : 'Remover Publicação'}
                                            </S.ButtonDelete>
                                        </S.BoxButton>
                                    </S.BoxInformationLlinkYoutube>
                            ))}

                        </S.BoxResults> 

                        {dataLinkYoutube.length === 0 && 
                            <S.ButtonAdicionar type="button" onClick={handleAddLinkFormClick} >
                                Adicionar Link
                            </S.ButtonAdicionar>
                        }
                    </S.BoxLink>
                }
{/*## Membros ################################################################################## */}
                {viewMembers &&
                    <S.BoxMember>
                        <S.TitleBoxesViews>Membros do Garangas</S.TitleBoxesViews>

                        {formMember &&
                            <S.BoxForm>                            
                                <S.ButtonClose type="button" onClick={handleCloseFormClick} >
                                    Fechar
                                </S.ButtonClose>
                                

                                <S.BoxForm style={{boxShadow: 'none'}}>
                                    <S.BoxFilexImage>
                                        <S.InputFiles htmlFor="image" >
                                            Adicionar  <br />Imagem de <br /> Capa
                                        </S.InputFiles>

                                        {photoMember && photoMember.length > 0 && photoFileMember.length === 0 &&
                                            <S.BoxImageLoadin>
                                                <S.FileImage alt="Load foto" src="../../assets/ajax-loader.gif" />
                                            </S.BoxImageLoadin>
                                        }
                                        {photoFileMember && photoFileMember.length > 0 &&
                                            <>
                                                <S.FileImagePhoto alt="Foto do projeto" src={photoFileMember} /> 
                                            </>
                                        }
                                        
                                        <S.Files 
                                            onChange={handleImageMemberForm} 
                                            name="file" 
                                            type="file" 
                                            id="image" 
                                        />
                                        <S.Files 
                                            onChange={handleImagesMemberForm} 
                                            multiple
                                            name="imageFiles" 
                                            type="file" 
                                            id="imageFiles" 
                                        />
                                    </S.BoxFilexImage>
                                    <S.BoxFilexImageArray>
                                        {photoFileMember && photoFileMember.length > 0 &&
                                            <>                                                
                                                <S.InputFiles htmlFor="imageFiles" style={{marginLeft: '15px'}} >
                                                    Adicionar <br /> imagens do <br /> projeto
                                                </S.InputFiles>

                                                {photoFilesLoadingMember && photoFilesLoadingMember.map((item, index) => (
                                                    <S.BoxImageLoadin key={index}>
                                                        <S.FileImage alt="Load foto" src="../../assets/ajax-loader.gif" />
                                                    </S.BoxImageLoadin>
                                                ))}
                                                

                                                {photoFilesMember && photoFilesMember.map((item, index) => (
                                                    <S.FileImagePhoto key={index} alt="Foto do projeto" src={item} />
                                                ))}

                                            </>
                                        }
                                    </S.BoxFilexImageArray>

                                    <S.LabelForms>Digite o nome do membro:</S.LabelForms>
                                    <S.InputForms 
                                        type="text" 
                                        value={nameMember}
                                        onChange={e => setNameMember(e.target.value)} 
                                    />

                                    <S.LabelForms>Digite o título:</S.LabelForms>
                                    <S.InputForms 
                                        type="text" 
                                        value={titleMember}
                                        onChange={e => setTitleMember(e.target.value)} 
                                    />
                                    <S.LabelForms>Digite a descrição:</S.LabelForms>
                                    <S.InputFormsTextArea 
                                        type="text" 
                                        value={descriptionMember}
                                        onChange={e => setDescriptionMember(e.target.value)} 
                                    ></S.InputFormsTextArea>
                                    <S.ButtonForms type="button" onClick={sendValuesFormMember} >
                                        {loadingButton ? 'Enviando Dados' : 'Enviar Dados'} 
                                    </S.ButtonForms>
                                </S.BoxForm>                                
                            </S.BoxForm>
                        }






                        {formEditMember &&
                            <S.BoxForm>                            
                                <S.ButtonClose type="button" onClick={handleCloseFormClick} >
                                    Fechar
                                </S.ButtonClose>
                                

                                <S.BoxForm style={{boxShadow: 'none'}}>
                                    <S.BoxFilexImage>
                                        <S.InputFiles htmlFor="image" >
                                            Adicionar  <br />Imagem de <br /> Capa
                                        </S.InputFiles>

                                        {photoMember && photoMember.length > 0 && photoFileMember.length === 0 &&
                                            <S.BoxImageLoadin>
                                                <S.FileImage alt="Load foto" src="../../assets/ajax-loader.gif" />
                                            </S.BoxImageLoadin>
                                        }
                                        {photoFileMember && photoFileMember.length > 0 &&
                                            <>
                                                <S.FileImagePhoto alt="Foto do projeto" src={photoFileMember} /> 
                                            </>
                                        }
                                        
                                        <S.Files 
                                            onChange={handleImageMemberForm} 
                                            name="file" 
                                            type="file" 
                                            id="image" 
                                        />
                                        <S.Files 
                                            onChange={handleImagesMemberForm} 
                                            multiple
                                            name="imageFiles" 
                                            type="file" 
                                            id="imageFiles" 
                                        />
                                    </S.BoxFilexImage>
                                    <S.BoxFilexImageArray>
                                        {photoFileMember && photoFileMember.length > 0 &&
                                            <>                                                
                                                <S.InputFiles htmlFor="imageFiles" style={{marginLeft: '15px'}} >
                                                    Adicionar <br /> imagens do <br /> projeto
                                                </S.InputFiles>

                                                {photoFilesLoadingMember && photoFilesLoadingMember.map((item, index) => (
                                                    <S.BoxImageLoadin key={index}>
                                                        <S.FileImage alt="Load foto" src="../../assets/ajax-loader.gif" />
                                                    </S.BoxImageLoadin>
                                                ))}
                                                

                                                {photoFilesMember && photoFilesMember.map((item, index) => (
                                                    <S.BoxFileImagePhoto key={index}>
                                                        <S.FileImagePhoto  alt="Foto do projeto" src={item} />
                                                        <S.BoxFileImagePhotoClose
                                                            onClick={() => handlePhotoArrayRemoveMember(item)}
                                                        >
                                                            <S.TitleClosePhoto>X</S.TitleClosePhoto>
                                                        </S.BoxFileImagePhotoClose>
                                                    </S.BoxFileImagePhoto>                                                    
                                                ))}

                                            </>
                                        }
                                    </S.BoxFilexImageArray>

                                    <S.LabelForms>Digite o nome do proprietário:</S.LabelForms>
                                    <S.InputForms 
                                        type="text" 
                                        value={nameMember}
                                        onChange={e => setNameMember(e.target.value)} 
                                    />

                                    <S.LabelForms>Digite o título:</S.LabelForms>
                                    <S.InputForms 
                                        type="text" 
                                        value={titleMember}
                                        onChange={e => setTitleMember(e.target.value)} 
                                    />
                                    <S.LabelForms>Digite a descrição:</S.LabelForms>
                                    <S.InputFormsTextArea 
                                        type="text" 
                                        value={descriptionMember}
                                        onChange={e => setDescriptionMember(e.target.value)} 
                                    ></S.InputFormsTextArea>
                                    <S.ButtonForms type="button" onClick={() => sendValuesFormEditMember(idMember)} >
                                        {loadingButton ? 'Enviando Dados' : 'Enviar Dados'} 
                                    </S.ButtonForms>
                                </S.BoxForm>                                
                            </S.BoxForm>
                        }


                        <S.BoxResults>
                        {dataMember.length === 0 && 
                            <>
                              <S.LabelForms>Não existe publicações no momento!</S.LabelForms>
                            </>
                        }

                        {dataMember.length > 0 && dataMember.map((item, index) => (
                            <S.BoxInformationEvent key={index}>
                                <S.BoxEventResults>
                                    <S.BoxEventResultsImage>
                                        <S.ImageEvent alt="Member" src={item.cover} />
                                    </S.BoxEventResultsImage>
                                    <S.BoxEventResultsDescription>
                                        <S.LabelForms>{item.name}</S.LabelForms>
                                        <S.InfoForms>{item.title}</S.InfoForms>
                                    </S.BoxEventResultsDescription>
                                </S.BoxEventResults>
                               
    
                                <S.BoxButton>
                                    <S.ButtonEdit 
                                        onClick={() => handleEditMember(item)} >
                                        Alterar Publicação
                                    </S.ButtonEdit>
                                    <S.ButtonDelete onClick={() => handleRemoveMember(item.id)}>
                                        {loadingButton ? 'Removendo Publicação' : 'Remover Publicação'}
                                    </S.ButtonDelete>
                                </S.BoxButton>
                            </S.BoxInformationEvent>
                        ))}
                        </S.BoxResults>

                        <S.ButtonAdicionar
                            type="button"
                            onClick={handleOpenFormMemberClick}
                        >
                            Adicionar Membro
                        </S.ButtonAdicionar>
                    </S.BoxMember>
                }
{/*## Parceiros ################################################################################ */}
                {viewPartners &&
                    <S.BoxPartner>
                        <S.TitleBoxesViews>Parceiros</S.TitleBoxesViews>


                        <S.BoxResults></S.BoxResults>

                        <S.ButtonAdicionar>Adicionar Parceiro</S.ButtonAdicionar>
                    </S.BoxPartner>
                }
{/*## Projetos ################################################################################# */}
                {viewProjects &&
                    <S.BoxProject>
                        <S.TitleBoxesViews>Projetos</S.TitleBoxesViews>

                        {formProject &&
                            <S.BoxForm>                            
                                <S.ButtonClose type="button" onClick={handleCloseFormClick} >
                                    Fechar
                                </S.ButtonClose>
                                

                                <S.BoxForm style={{boxShadow: 'none'}}>
                                    <S.BoxFilexImage>
                                        <S.InputFiles htmlFor="image" >
                                            Adicionar  <br />Imagem de <br /> Capa
                                        </S.InputFiles>

                                        {photoProject && photoProject.length > 0 && photoFileProject.length === 0 &&
                                            <S.BoxImageLoadin>
                                                <S.FileImage alt="Load foto" src="../../assets/ajax-loader.gif" />
                                            </S.BoxImageLoadin>
                                        }
                                        {photoFileProject && photoFileProject.length > 0 &&
                                            <>
                                                <S.FileImagePhoto alt="Foto do projeto" src={photoFileProject} /> 
                                            </>
                                        }
                                        
                                        <S.Files 
                                            onChange={handleImageProjectForm} 
                                            name="file" 
                                            type="file" 
                                            id="image" 
                                        />
                                        <S.Files 
                                            onChange={handleImagesProjectForm} 
                                            multiple
                                            name="imageFiles" 
                                            type="file" 
                                            id="imageFiles" 
                                        />
                                    </S.BoxFilexImage>
                                    <S.BoxFilexImageArray>
                                        {photoFileProject && photoFileProject.length > 0 &&
                                            <>                                                
                                                <S.InputFiles htmlFor="imageFiles" style={{marginLeft: '15px'}} >
                                                    Adicionar <br /> imagens do <br /> projeto
                                                </S.InputFiles>

                                                {photoFilesLoadingProjects && photoFilesLoadingProjects.map((item, index) => (
                                                    <S.BoxImageLoadin key={index}>
                                                        <S.FileImage alt="Load foto" src="../../assets/ajax-loader.gif" />
                                                    </S.BoxImageLoadin>
                                                ))}
                                                

                                                {photoFilesProject && photoFilesProject.map((item, index) => (
                                                    <S.FileImagePhoto key={index} alt="Foto do projeto" src={item} />
                                                ))}

                                            </>
                                        }
                                    </S.BoxFilexImageArray>

                                    <S.LabelForms>Digite o nome do proprietário:</S.LabelForms>
                                    <S.InputForms 
                                        type="text" 
                                        value={nameProject}
                                        onChange={e => setNameProject(e.target.value)} 
                                    />

                                    <S.LabelForms>Digite o título:</S.LabelForms>
                                    <S.InputForms 
                                        type="text" 
                                        value={titleProject}
                                        onChange={e => setTitleProject(e.target.value)} 
                                    />
                                    <S.LabelForms>Digite a descrição:</S.LabelForms>
                                    <S.InputFormsTextArea 
                                        type="text" 
                                        value={descriptionProject}
                                        onChange={e => setDescriptionProject(e.target.value)} 
                                    ></S.InputFormsTextArea>
                                    <S.LabelForms>Digite os projetos futuros:</S.LabelForms>
                                    <S.InputForms 
                                        type="text" 
                                        value={futureProject}
                                        onChange={e => setFutureProject(e.target.value)} 
                                    />
                                    <S.ButtonForms type="button" onClick={sendValuesFormProject} >
                                        {loadingButton ? 'Enviando Dados' : 'Enviar Dados'} 
                                    </S.ButtonForms>
                                </S.BoxForm>                                
                            </S.BoxForm>
                        }





                        {formEditProject &&
                            <S.BoxForm>                            
                                <S.ButtonClose type="button" onClick={handleCloseFormClick} >
                                    Fechar
                                </S.ButtonClose>
                                

                                <S.BoxForm style={{boxShadow: 'none'}}>
                                    <S.BoxFilexImage>
                                        <S.InputFiles htmlFor="image" >
                                            Adicionar  <br />Imagem de <br /> Capa
                                        </S.InputFiles>

                                        {photoProject && photoProject.length > 0 && photoFileProject.length === 0 &&
                                            <S.BoxImageLoadin>
                                                <S.FileImage alt="Load foto" src="../../assets/ajax-loader.gif" />
                                            </S.BoxImageLoadin>
                                        }
                                        {photoFileProject && photoFileProject.length > 0 &&
                                            <>
                                                <S.FileImagePhoto alt="Foto do projeto" src={photoFileProject} /> 
                                            </>
                                        }
                                        
                                        <S.Files 
                                            onChange={handleImageProjectForm} 
                                            name="file" 
                                            type="file" 
                                            id="image" 
                                        />
                                        <S.Files 
                                            onChange={handleImagesProjectForm} 
                                            multiple
                                            name="imageFiles" 
                                            type="file" 
                                            id="imageFiles" 
                                        />
                                    </S.BoxFilexImage>
                                    <S.BoxFilexImageArray>
                                        {photoFileProject && photoFileProject.length > 0 &&
                                            <>                                                
                                                <S.InputFiles htmlFor="imageFiles" style={{marginLeft: '15px'}} >
                                                    Adicionar <br /> imagens do <br /> projeto
                                                </S.InputFiles>

                                                {photoFilesLoadingProjects && photoFilesLoadingProjects.map((item, index) => (
                                                    <S.BoxImageLoadin key={index}>
                                                        <S.FileImage alt="Load foto" src="../../assets/ajax-loader.gif" />
                                                    </S.BoxImageLoadin>
                                                ))}
                                                

                                                {photoFilesProject && photoFilesProject.map((item, index) => (
                                                    <S.BoxFileImagePhoto key={index}>
                                                        <S.FileImagePhoto  alt="Foto do projeto" src={item} />
                                                        <S.BoxFileImagePhotoClose
                                                            onClick={() => handlePhotoArrayRemove(item)}
                                                        >
                                                            <S.TitleClosePhoto>X</S.TitleClosePhoto>
                                                        </S.BoxFileImagePhotoClose>
                                                    </S.BoxFileImagePhoto>                                                    
                                                ))}

                                            </>
                                        }
                                    </S.BoxFilexImageArray>

                                    <S.LabelForms>Digite o nome do proprietário:</S.LabelForms>
                                    <S.InputForms 
                                        type="text" 
                                        value={nameProject}
                                        onChange={e => setNameProject(e.target.value)} 
                                    />

                                    <S.LabelForms>Digite o título:</S.LabelForms>
                                    <S.InputForms 
                                        type="text" 
                                        value={titleProject}
                                        onChange={e => setTitleProject(e.target.value)} 
                                    />
                                    <S.LabelForms>Digite a descrição:</S.LabelForms>
                                    <S.InputFormsTextArea 
                                        type="text" 
                                        value={descriptionProject}
                                        onChange={e => setDescriptionProject(e.target.value)} 
                                    ></S.InputFormsTextArea>
                                    <S.LabelForms>Digite os projetos futuros:</S.LabelForms>
                                    <S.InputForms 
                                        type="text" 
                                        value={futureProject}
                                        onChange={e => setFutureProject(e.target.value)} 
                                    />
                                    <S.ButtonForms type="button" onClick={() => sendValuesFormEditProject(idProject)} >
                                        {loadingButton ? 'Enviando Dados' : 'Enviar Dados'} 
                                    </S.ButtonForms>
                                </S.BoxForm>                                
                            </S.BoxForm>
                        }


                        <S.BoxResults>
                        {dataProject.length === 0 && 
                            <>
                              <S.LabelForms>Não existe publicações no momento!</S.LabelForms>
                            </>
                        }

                        {dataProject.length > 0 && dataProject.map((item, index) => (
                            <S.BoxInformationEvent key={index}>
                                <S.BoxEventResults>
                                    <S.BoxEventResultsImage>
                                        <S.ImageEvent alt="Project" src={item.cover} />
                                    </S.BoxEventResultsImage>
                                    <S.BoxEventResultsDescription>
                                        <S.LabelForms>{item.name}</S.LabelForms>
                                        <S.InfoForms>{item.title}</S.InfoForms>
                                    </S.BoxEventResultsDescription>
                                </S.BoxEventResults>
                               
    
                                <S.BoxButton>
                                    <S.ButtonEdit 
                                        onClick={() => handleEditProject(item)} >
                                        Alterar Publicação
                                    </S.ButtonEdit>
                                    <S.ButtonDelete onClick={() => handleRemoveProject(item.id)}>
                                        {loadingButton ? 'Removendo Publicação' : 'Remover Publicação'}
                                    </S.ButtonDelete>
                                </S.BoxButton>
                            </S.BoxInformationEvent>
                        ))}

                        </S.BoxResults>

                        <S.ButtonAdicionar 
                            type="button"
                            onClick={handleOpenFormProjectClick}
                        >
                            Adicionar Projeto
                        </S.ButtonAdicionar>
                    </S.BoxProject>
                }
            </S.BoxRight>                  
          </S.Container>  
        </>
    );
}

export default Insertions;