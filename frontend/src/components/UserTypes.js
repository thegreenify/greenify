import React from 'react'
import { Link } from 'react-router-dom'

const UserTypes = () => {
  return (
    <div>
              <div className="row" >
<div className="col-md-3">
<Link  to="/allottes" style={{"textDecoration" : "none"}}>

          <div className="card mb-4 cursor-pointer">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between">
              <p className="text-red">Allottes <strong>0</strong></p>
                <div className="lnr lnr-leaf display-4 text-primary"></div>
              </div>
            </div>
          </div>
          </Link>
        </div>


        <div className="col-md-3">
          <div className="card mb-4">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between">
        <p>Vendors <strong>0</strong></p>
                <div className="lnr lnr-chart-bars display-4 text-success"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default UserTypes