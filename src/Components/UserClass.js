import React from "react";

class UserClass extends React.Component {
    render() {

        const {user = this.props}

        return <p>ja sam {user.name} i imam {user.age}</p>
    }
}


export default UserClass;