const Person = (props)=>
{
    let votePlease = props.age >=18? "GO VOTE": "GO TO SLEEP"
    let hobbies  = props.hobbies.map( hobby => <li>{hobby}</li>)
    return(
        <div>
        <p>learn some info about this Person</p>
        <p> Name:{props.name.slice(0,6)}</p>
        <p> Age:{props.age}</p>
        <ul>
            hobbies
            {hobbies}
        </ul>
        <h3>{votePlease}</h3>
        </div>
    )
}