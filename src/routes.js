import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/home/home'
import Layout from './hoc/layout'
import Posts from './components/articles/news/posts/posts'
import Video from './components/articles/news/posts/videos/video/video'
import NewsMain from './components/articles/news/posts/newsMain/newsMain'
import VideosMain from './components/articles/news/posts/videos/video/videosMain'
export default class Routes extends Component {
    render() {
   
        return (
            <Layout>
                <Switch>
                    <Route path = "/" exact component = {Home} />
                    <Route path = "/news" exact  component = {NewsMain} />
                    <Route path = "/articles/:id" exact component = {Posts} />
                    <Route path = "/videos/:id" exact component = {Video} />
                    <Route path = "/videos" exact component = {VideosMain} />

                </Switch>
            </Layout>

                
            
        )
    }
}
