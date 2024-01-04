import React from 'react';
import "./MealForm.css"

const MealForm = () => {
    return (
            <form className="form">
                <div className='form-group'>
                    <label>Amount</label>
                    <input type="number" min="1" max="10" defaultValue="1" />
                </div>
                <div className='form-button'>
                    <button>+ Add</button>
                </div>
            </form>
    );
};

export default MealForm;
