import React, { Component } from "react";

class HomeSchedule extends Component {
    state = {
        schedule: [
            {
                day: "Mandag",
                artists: [
                    {
                        name: "Ryu3",
                        id: "1",
                    },
                    {
                        name: "Yoshi3",
                        id: "2",
                    },
                    {
                        name: "Crystal3",
                        id: "3",
                    }
                ]
            },
            {
                day: "Tirsdag",
                artists: [
                    {
                        name: "Ryu3",
                        id: "1",
                    },
                    {
                        name: "Yoshi3",
                        id: "2",
                    },
                    {
                        name: "Crystal3",
                        id: "3",
                    }
                ]
            },
            {
                day: "Onsdag",
                artists: [
                    {
                        name: "Ryu3",
                        id: "1",
                    },
                    {
                        name: "Yoshi3",
                        id: "2",
                    },
                    {
                        name: "Crystal3",
                        id: "3",
                    }
                ]
            },
            {
                day: "torsdag",
                artists: [
                    {
                        name: "Ryu3",
                        id: "1",
                    },
                    {
                        name: "Yoshi3",
                        id: "2",
                    },
                    {
                        name: "Crystal3",
                        id: "3",
                    }
                ]
            },
            {
                day: "fredag",
                artists: [
                    {
                        name: "Ryu3",
                        id: "1",
                    },
                    {
                        name: "Yoshi3",
                        id: "2",
                    },
                    {
                        name: "Crystal3",
                        id: "3",
                    }
                ]
            }
        ]
    };
    render() {

        const listSchedule = this.state.schedule.map(sched => (
            <React.Fragment key={sched.day}>
                <tr >
                    <th>{sched.day}</th>
                </tr>
                {
                    sched.artists.map(artist => (
                        <tr key={artist.id}>
                            <td>{artist.name}</td>
                        </tr>
                    ))
                }
            </React.Fragment>
        ));
        return (
            <div>
                <a className="btn btn-success buyTicketsBtn" href="program">Kjøp billetter</a>
                <table className="tableSchedule">
                    <tbody>{listSchedule}</tbody>
                </table>
            </div>

        );
    }
}

export default HomeSchedule;
