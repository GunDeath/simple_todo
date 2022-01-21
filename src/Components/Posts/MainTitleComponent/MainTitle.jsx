import React from 'react';

const MainTitle = ({children, title}) => {
    const styles = { h1: {textAlign: 'center'}, hr: {margin: 15}}
    return (
        <div>
            <h1 style={styles.h1}>{title}</h1>
            <hr style={styles.hr}/>
            {children}
        </div>
    );
};

export default MainTitle;