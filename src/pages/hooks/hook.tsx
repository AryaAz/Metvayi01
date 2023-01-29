import React, {ChangeEvent, useRef, useState} from 'react';

const Hook = () => {

    const inputRef = useRef<HTMLInputElement>(null)
    const [file, setFile] = useState<File>()

    function handleOpenFile() {
        inputRef.current?.click()
    }

    function handleChangeFile(e: ChangeEvent<HTMLInputElement>) {
        const files = e.target.files;
        if (files)
            setFile(files?.[0])
    }

    return (
        <div>
            <input type="file" style={{display: "none"}} ref={inputRef} onChange={e => handleChangeFile}/>
            <div onClick={handleOpenFile}>
                {file ? <span>1 file selected</span> :
                    <span>Select File</span>
                }
                <span>📁</span>
            </div>
        </div>
    );
};

export default Hook;
