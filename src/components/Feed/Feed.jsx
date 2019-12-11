import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { Post, CreatePost } from '../';
import './Feed.scss';

export default props => {
    return (
        <div className="feed">
            <PerfectScrollbar>
                <main className="main">
                    <CreatePost />
                    <div className="posts">
                        <p className="recent-posts">Recent posts</p>
                        <Post />
                        <Post />
                    </div>
                </main>
            </PerfectScrollbar>
        </div>
    );
};
