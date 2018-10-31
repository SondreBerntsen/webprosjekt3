import React, { Component } from 'react';
import AdminPostItem from '../AdminPostItem'

class AdminPosts extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "Merlin1",
        newsText: 'These are the brand new adventures of Merlin, the legendary sorcerer as a young man, when he was just a servant to young Prince Arthur on the royal court of Camelot, who has soon become his best friend, and turned Arthur into a great king and a legend.',
        date: '2018-07-22',
        img: "https://www.drammensacred.no/wp-content/uploads/2018/07/Vinterma%CC%8Ane-960x654.jpg"
      },
      {
        id: 2,
        title: "Merlin2",
        newsText: 'These are the brand new adventures of Merlin, the legendary sorcerer as a young man, when he was just a servant to young Prince Arthur on the royal court of Camelot, who has soon become his best friend, and turned Arthur into a great king and a legend.',
        date: '2018-07-22',
        img: "https://www.drammensacred.no/wp-content/uploads/2018/07/Vinterma%CC%8Ane-960x654.jpg"
      },
      {
        id: 3,
        title: "Merlin3",
        newsText: 'These are the brand new adventures of Merlin, the legendary sorcerer as a young man, when he was just a servant to young Prince Arthur on the royal court of Camelot, who has soon become his best friend, and turned Arthur into a great king and a legend.',
        date: '2018-07-22',
        img: "https://www.drammensacred.no/wp-content/uploads/2018/07/Vinterma%CC%8Ane-960x654.jpg"
      },
      {
        id: 4,
        title: "Merlin4",
        newsText: 'These are the brand new adventures of Merlin, the legendary sorcerer as a young man, when he was just a servant to young Prince Arthur on the royal court of Camelot, who has soon become his best friend, and turned Arthur into a great king and a legend.',
        date: '2018-07-22',
        img: "https://www.drammensacred.no/wp-content/uploads/2018/07/Vinterma%CC%8Ane-960x654.jpg"
      },
      {
        id: 5,
        title: "Merlin5",
        newsText: 'These are the brand new adventures of Merlin, the legendary sorcerer as a young man, when he was just a servant to young Prince Arthur on the royal court of Camelot, who has soon become his best friend, and turned Arthur into a great king and a legend.',
        date: '2018-07-22',
        img: "https://www.drammensacred.no/wp-content/uploads/2018/07/Vinterma%CC%8Ane-960x654.jpg"
      },
      {
        id: 6,
        title: "Merlin6",
        newsText: 'These are the brand new adventures of Merlin, the legendary sorcerer as a young man, when he was just a servant to young Prince Arthur on the royal court of Camelot, who has soon become his best friend, and turned Arthur into a great king and a legend.',
        date: '2018-07-22',
        img: "https://www.drammensacred.no/wp-content/uploads/2018/07/Vinterma%CC%8Ane-960x654.jpg"
      }
    ]
  }
  render() {
    return (
      <div className="container tablesAdmin col-md-9 col-lg-10">
        <button className=" createNewBtn btn btn-info btn-sm" type="button" data-toggle="collapse" data-target='#newPostForm' aria-expanded="false" aria-controls='newPostForm'>Create new post</button>
        <div className="collapseForm col-12 collapse" id="newPostForm">
          <form className="col-md-8 col-lg-6">
            <div class="form-row">
              <label>Title</label>
              <input type="text" className="form-control" placeholder="Enter title" />
            </div>
            <div class="form-row">
              <label>Image</label>
              <input type="file" className="form-control" placeholder="Enter title" />
            </div>
            <div className="form-group">
              <label>News text</label>
              <textarea type="text" class="form-control" />
            </div>
            <button type="submit" class="btn btn-info btn-sm">Submit</button>
          </form>
        </div>
        {
          this.state.posts.map(post => (
            <div key={post.id}>
              <AdminPostItem post={post} />
            </div>
          ))
        }
      </div>
    );
  }
}

export default AdminPosts;