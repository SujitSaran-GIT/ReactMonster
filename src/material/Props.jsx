import UserProps from "./UserProps"

function Props() {
    return (
        <>
            <UserProps
                name="SUJIT SARAN"
                age={23}
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFRQjM-wM_nXMA03AGDXgJK3VeX7vtD3ctA&s"
                isMarried={true}
                hobbies={
                    ["Coding", "Sleeping", "Reading"]
                }

            />
        </>
    )

}
export default Props