import HelloWorld       from '@/components/HelloWorldComposition.vue'
import { shallowMount } from '@vue/test-utils'

describe('HelloWorldComposition.vue', () => {
	it('passes', () => {
		const propsData = {
			msg: 'This is a greeting'
		}

		const wrapper = shallowMount(HelloWorld, {
			propsData: propsData
		})
		console.log(wrapper.html())

		expect(wrapper.findComponent('h1').text()).toBe('This is a greeting')
	})
})