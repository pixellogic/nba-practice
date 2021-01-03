import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {URL} from '../../../config'
import { Switch } from '@material-ui/core'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Button from '../buttons/button'
import CardInfo from '../cardInfo/cardInfo'
export default class NewsList extends Component {
    state = {
        teams: [],
        items:[],
        start: this.props.start,
        end: this.props.start + this.props.amount,
        amount: this.props.amount
    }
    componentWillMount(){
      this.request(this.state.start, this.state.end)
    }
    request = (start, end) =>{
        if(this.state.teams.length < 1){
            axios.get(`${URL}/teams`)
            .then(response =>{
                
                this.setState({
                    teams: response.data
                })
            })
        }
        axios.get(`${URL}/articles?_start=${start}&_end=${end}`)
        .then(response =>{
            
            this.setState({
                items:[...this.state.items, ...response.data],
                start,
                end
            })
        })
    }
    loadMore = () =>{
        let end = this.state.end + this.state.amount
        this.request(this.state.end, end)
    }
    renderNews = (type) =>{
        let template = null
        switch(type){
            case('card'):
            template = this.state.items.map((item, i) =>(
               
                     <div key = {i}>
                    <div className = "newsList__item">
                        <Link to = {`/articles/${item.id}`} >
                        <CardInfo
                            teams = {this.state.teams}
                            team = {item.team}
                            date = {item.date}
                        />
                            <h2>{item.title}</h2>

                        </Link>
                    </div>
                </div>
              
               
            ))
            break
            case('cardMain'):
            template = this.state.items.map((item, i) =>(
               
                     <div key = {i}>
                    <div className = "newsList__item">
                        <Link to = {`/articles/${item.id}`} >
                            <div className = "flexWrapper">
                                <div className = "flexWrapper__left" style = {{
                                    background: `url('/images/articles/${item.image}')`
                                }}><div></div></div>
                                <div className = "flexWrapper__right">
                                <CardInfo
                            teams = {this.state.teams}
                            team = {item.team}
                            date = {item.date}
                        />
                            <h2>{item.title}</h2>
                                </div>
                            </div>
                                

                        </Link>
                    </div>
                </div>
              
               
            ))
            break
            
            default:
            template = null
        }
        return template
    }
    render() {
    
        return (
            <div>
                
                {this.renderNews(this.props.type)}
                
              <Button
                type = "loadMore"
                loadMore = {() =>this.loadMore()}
                cta = "Load More"
              />
              
              
            </div>
        )
    }
}
