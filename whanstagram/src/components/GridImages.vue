<template>
    <div id="grid-images">
        <div class="ui card my-ig-card" v-for="(username, i) in usernames" :key="i">
            <div class="content">
                <div class="right floated meta">14h</div>
                <img class="ui avatar image" :src="avatarImg">
                <b>{{ username }}</b> 
            </div>
            <div class="image">
                <img :src="apis.data.message[i]">
            </div>
            <div class="content">
                <span class="right floated">
                <i class="heart outline like icon"></i>
                17 likes
                </span>
                <i class="comment icon"></i>
                3 comments
            </div>
            <div class="extra content">
                <div class="ui large transparent left icon input">
                <i class="heart outline icon"></i>
                <input type="text" placeholder="Add Comment...">
                </div>
            </div>
        </div>

        {{ apis.data.message }}
    </div>
    
</template>

<script>
import axios from 'axios';

export default {
    name: 'GridImages',
    data: function() {
        return {
            avatarImg: 'https://tse3.mm.bing.net/th?id=OIP.nFyCAO1Ml4NC8PbOVi9uVQHaGr&pid=Api&P=0&w=193&h=175',
            usernames: ['whan1', 'whan2', 'whan3', 'whan4', 'whan5'],
            apis: null
        }
    },
    mounted: function() {
        axios
        .get('https://dog.ceo/api/breed/pomeranian/images/random/10')
        .then(response => this.apis = response)
    }
}
</script>

<style>
    #grid-images {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
    }

</style>