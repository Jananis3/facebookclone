import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react"
import Navigation from "../components/Navigation/Navigation";
import './store.css';
import {FiSearch,FiSettings}from 'react-icons/fi';
import{AiOutlineShop,AiOutlineInbox,AiTwotoneShopping}from 'react-icons/ai';
import{IoMdNotificationsOutline}from 'react-icons/io';
import{CiShoppingTag}from 'react-icons/ci';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
        

function Friends()
{
    return(
        
       
        <div className="store">
        <div className="row">
             <div className="col-md-6">
        <div className="index" style={{position:"fixed"}}>
        <h4 className="head">Requests</h4 >
        <div className="searchbar mb-4" >< FiSearch className="me-4"/>Search 
              </div>
              <h6 className="h5 mb-4"><AiOutlineShop className="fi" size="30px"/>Browse all</h6>
              <h6 className="h5 mb-4"><IoMdNotificationsOutline className="fi" size="30px"/>Notification</h6>
              <h6 className="h5 mb-4"><AiOutlineInbox className="fi" size="30px"/>Inbox</h6>
              <h6 className="h5 mb-4"><AiTwotoneShopping className="fi" size="30px"/>Buying</h6>
              <h6 className="h5 mb-4"><CiShoppingTag className="fi" size="30px"/>Selling</h6>
        
        </div>
            </div> 
            <div className="col-md-12 mt-0">
        
        <div className="market">
        <div id="friendrequest" className="col s12">
            <ul className="collection" style={{width:"800px"}}>
              <li className="collection-item">Friend Requests
                <span className="new badge">4</span>
              </li>
              <li className="collection-item avatar">
                <img src="/images/pho.jpg" alt="avatar" className="circle"/>
                <h5>Anbarasan</h5>
                <div>
                  <p>
                    <a class="blue btn-flat white-text" href="#">Confirm</a>
                    <a class="btn-flat btn-secondary" href="#">Delete</a>
                  </p>
                </div>
              </li>
        
              <li className="collection-item avatar mt-3">
                <img src="/images/pho.jpg" alt="avatar" className="circle"/>
                <h5>devaraj</h5>
                <div>
                  <p>
                    <a class="blue btn-flat white-text" href="#">Confirm</a>
                    <a class="btn-flat btn-secondary" href="#">Delete</a>
                  </p>
                </div>
              </li>
        
        
              <li className="collection-item avatar mt-3">
                <img src="/images/pho.jpg" alt="avatar" className="circle"/>
                <h5>harish</h5>
                <div>
                  <p>
                    <a class="blue btn-flat white-text" href="#">Confirm</a>
                    <a class="btn-flat btn-secondary" href="#">Delete</a>
                  </p>
                </div>
              </li>
        
        
              
            </ul>
          </div>        
        
        
        </div>
            </div>
        </div>
        
        </div>
            );
        }
        export default Friends;
