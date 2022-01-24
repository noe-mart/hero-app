import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Search = () => {
    const [keyword, setKeyboard] = useState('')
    const navigate = useNavigate()

    const handleChange = (e) => {
        setKeyboard(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setKeyboard('')
        navigate(`search/${keyword.toLowerCase()}`)
    }

    return (
        <div className='navbar-collapse collapse w-100 order-3 dual-collapse2 ms-auto'>
            <div className="input-group">
                <form onSubmit={handleSubmit} className='flex'>
                    <div className="row">
                        <div className='col-auto pe-0'>
                            <input value={keyword} className="form-control" placeholder="Buscar" onChange={handleChange} />
                        </div>
                        <div className='col-auto ps-0'>
                            <button type='submit' className='btn btn-info'>Buscar</button>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
