import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import './MainPhone_Alert.css';

const MainPhone_Alert = ({alert, setAlert, dispatch}) => {
    const handleDelete = id =>{
        dispatch({type: 'DeleteContact', payload: {id}})
        setAlert({display:'none',id:''})
    }
    return (
        <Alert className='MainPhone_Alert'   variant="filled" severity="error" style={{display: alert.display}} action={
            <div>
                <CheckIcon cursor={'pointer'} onClick={()=>handleDelete(alert.id)}/>
                <ClearIcon cursor={'pointer'} onClick={()=>setAlert({display:'none',id:''})} />
            </div>}>
            Are you sure you want to delete this contact ?
        </Alert>
    )
}

export default MainPhone_Alert