import { useState } from "react"

export default function StudentCard({ name, course, image, description }) {

    const [visible, setVisible] = useState(false);

    return (
        <div className="student-card" >
            <img src={image} alt="no image" />
            {visible && (
                <>
                    <h3>{name}</h3>
                    <h4>{course}</h4>
                    <p>{description}</p>
                </>
            )}

            <button onClick={() => setVisible(!visible)}>{visible? "Hide" : "Show"} Details</button>

        </div>
    )

}