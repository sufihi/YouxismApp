import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Cartoon from '@/components/Cartoon/Cartoon'
import Recommend from '@/components/Cartoon/Recommend/Recommend'
import Special from '@/components/Cartoon/Special/Special'
import Category from '@/components/Cartoon/Category/Category'


import Fiction from '@/components/Fiction/Fiction'
import Community from '@/components/Community/Community'
import Ranking from '@/components/Ranking/Ranking'

export default new Router({
	routes: [
	  	{
			path:'/',
			component:Cartoon
		},
		{
			path:'/cartoon',
			component:Cartoon,
			children:[
				{
					path:'/cartoon',
					component:Recommend
				},
				{
		  			path:'recommend',
		  			component:Recommend
		  		},
		  		{
		  			path:'special',
		  			component:Special
		  		},
		  		{
		  			path:'category',
		  			component:Category
		  		}
			]
		},
		/*---------------------------*/ 
		{
			path:'/fiction',
			component:Fiction
		},
		{
  			path:'/community',
  			component:Community
  		},
  		{
  			path:'/ranking',
  			component:Ranking
  		}
	]
})
