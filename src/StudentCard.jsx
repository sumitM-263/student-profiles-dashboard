
export default function StudentCard({name, course, image, description}){

    return (
        <div className="student-card" >
            <img src={image} alt="no image" />
            <h3>{name}</h3>
            <h4>{course}</h4>
            <p>{description}</p>
        </div>
    )

}