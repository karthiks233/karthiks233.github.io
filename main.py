from flask import Flask, request, render_template
from textblob import TextBlob
import matplotlib.pyplot as plt
import seaborn as sns
import json
import csv
import tweepy
import re
import pandas as pd
import nltk
# nltk.download('stopwords')
# nltk.download('punkt')
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk import FreqDist
import plotly.express as px
import plotly.io as pio
from plotly.subplots import make_subplots
import plotly.graph_objects as go
import dash
from dash import Dash
import dash as dcc
import dash as html
from dash.dependencies import Input, Output, State
import base64
from io import BytesIO



from wordcloud import WordCloud, STOPWORDS, ImageColorGenerator






li = []
cnt_neg = 0
cnt_neu = 0
cnt_pos = 0
li_pos = []
li_neg = []
li_neu = []
likes_pos = 0
likes_neg=0
likes_neu = 0
like_cnt={'positive':likes_pos,'neutral':likes_neu,'negative':likes_neg}

cnt = {"positive":cnt_pos,"neutral":cnt_neu,"negative":cnt_neg}


def clean_tweet(tweet):
    '''
    Utility function to clean tweet text by removing links, special characters
    using simple regex statements.
    '''
    punctuations = '''!()-[]{};:'"\,<>./?@#$%^&*_~'''

    r = ' '.join(re.sub("(@[A-Za-z0-9]+)|([^0-9A-Za-z \t]) | (\w+:\ / \ / \S+)", " ", tweet).split())
    r = ' '.join(re.sub('http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+#]|[!*\(\),]|' \
                        '(?:%[0-9a-fA-F][0-9a-fA-F]))+', '', tweet).split())
    no_punct = ""
    for char in r:
        if char not in punctuations:
            no_punct = no_punct + char
    return no_punct


def get_tweet_sentiment(tweet):
    '''
    Utility function to classify sentiment of passed tweet
    using textblob's sentiment method
    '''

    # create TextBlob object of passed tweet text
    analysis = TextBlob(clean_tweet(tweet))
    # set sentiment
    if analysis.sentiment.polarity > 0:
        # like_cnt['positive']+=int(tweet.favorite_count)
        li_pos.append(clean_tweet(tweet.lower()))
        cnt['positive']+=1
        return 'positive'
    elif analysis.sentiment.polarity == 0:
        # like_cnt['neutral'] +=int(tweet.favorite_count)

        li_neu.append(clean_tweet(tweet.lower()))
        cnt["neutral"] += 1
        return 'neutral'
    else:
        # like_cnt['negative'] +=int(tweet.favorite_count)

        li_neg.append(clean_tweet(tweet.lower()))
        cnt['negative'] += 1
        return 'negative'







app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit_form():
    text = request.form['text']
    result = get_tweet_sentiment(text)
    return render_template('index.html', result=result)

if __name__ == '__main__':
    app.run(debug=True)
