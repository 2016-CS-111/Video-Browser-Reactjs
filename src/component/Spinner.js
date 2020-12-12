import React from 'react';

const Spinner = () => {
    return (
        <div className='ui active dimmer'>
            <div className='ui text loader'>
            </div>
        </div>
    );
}

// Spinner.defaulProps = {
//     message: "Loading...!"
// }

export default Spinner;