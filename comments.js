// Create web server
import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
import path from 'path';

const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

router.get('/api/articles/:name/comments', async (req, res) => {
    const articleName = req.params.name;
    const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
    const db = client.db('my-blog');

    const articleInfo = await db.collection('articles').findOne({ name: articleName });
    res.status(200).json(articleInfo.comments);
});