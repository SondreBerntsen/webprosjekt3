import React, { Component } from "react";
class AdminAbout extends Component {
    state = {
        vision_txt: '',
    }

    componentDidMount() {
        this.setState({ ...this.state } = this.props.about)
    }
    handleSubmit = (e) => {
        e.preventDefault()
        let body = {
            vision_txt: this.state.vision_txt
        }
        console.log(body);
        /* fetch(`http://localhost:5000/venues/update`, {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify(body)
         })
           .then(_ => {
             this.setState({ status: 'edited' })
             this.refs.address.innerHTML = this.state.address
             this.refs.capacity.innerHTML = this.state.capacity
             this.refs.addressIcon.innerHTML = ""
             this.refs.capacityIcon.innerHTML = ""
           })
           .catch(err => console.log(err))
       }
       handleChange = (e) => {
         this.setState({ status: 'editing' })
         switch (e.target.name) {
           case 'address':
             this.setState({ address: e.target.value })
             this.refs.addressIcon.innerHTML = "&#9998;"
             break;
           case 'capacity':
             this.setState({ capacity: e.target.value })
             this.refs.capacityIcon.innerHTML = "&#9998;"
             break;
           default:*/
    }
    handleChange = (e) => {
        switch (e.target.name) {
            case 'vision_txt':
                this.setState({ vision_txt: e.target.value })
                //console.log(e.target.value);
                //console.log(this.state.vision_txt);
                break;
            case 'dateHeader_txt':
                this.setState({ dateHeader_txt: e.target.value })
                //console.log(e.target.value);
                //console.log(this.props.dateHeader_txt);
                break;
            default:
        }
    }


    render() {
        return (
            <React.Fragment>
                <div className="elementCardAdmin row">
                    <p className="col-lg-10">
                        <span className="smallHeading">
                            Visjon, organisasjon og kontaktadresse
                    </span>
                    </p>
                    <div className="col-lg-2">
                        <button
                            className="btn  btn-secondary btnInElementAdmin btn-sm"
                            type="button"
                            data-toggle="collapse"
                            data-target="#staticTextForm"
                            aria-expanded="false"
                            aria-controls="staticTextForm"
                        >
                            Rediger
                    </button>
                    </div>
                </div>
                <div className="editScheduleItem collapse" id="staticTextForm">
                    <form className="col-md-8 col-lg-6" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Visjon</label>
                            <textarea
                                className="form-control"
                                defaultValue={this.props.about.vision_txt}
                                name="vision_txt"
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Organisasjon</label>
                            <textarea
                                className="form-control"
                                defaultValue={this.props.about.organization_txt}
                            />
                        </div>
                        <div className="form-group">
                            <label>Kontakt Adresse</label>
                            <input
                                className="form-control"
                                defaultValue={this.props.about.address}
                            />
                        </div>
                        <button type="submit" className="btn btn-info btn-sm">
                            Lagre
                    </button>
                    </form>
                </div>

            </React.Fragment>
        );
    }
}

export default AdminAbout;
