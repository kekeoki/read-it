/**
 * Created by sammy on 4/13/17.
 */

import React from 'react'
import ArticleFragment from './ArticleFragment'

class Home extends React.Component {
  render() {
    return (
      <div className = "col-md-10 col-md-offset-1">
        <div className="panel panel-default">
          <div className="panel-body">
            <ArticleFragment/>
          </div>
        </div>
      </div>
    );
  }
}


export default Home;
