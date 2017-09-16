import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Cartoon from '@/components/Cartoon/Cartoon'
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
			component:Cartoon
		},
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
