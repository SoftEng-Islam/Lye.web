<script setup lang="ts">
// Cookie Policy View
</script>

<template lang="pug">
div(class="container mx-auto px-4 py-8 prose dark:prose-invert")
	h1 Cookie Policy
	p Last updated: {{ new Date().toLocaleDateString() }}

	section
		h2 1. What Are Cookies?
		p Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site.

	section
		h2 2. How We Use Cookies
		p We use cookies to:
		ul
			li Understand and save user's preferences for future visits.
			li Compile aggregate data about site traffic and site interactions in order to offer better site experiences and tools in the future. We may also use trusted third-party services that track this information on our behalf.

	section
		h2 3. Types of Cookies We Use
		ul
			li **Strictly Necessary Cookies:** These are cookies that are required for the operation of our website.
			li **Analytical/Performance Cookies:** They allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it.
			li **Functionality Cookies:** These are used to recognize you when you return to our website.

	section
		h2 4. Managing Cookies
		p Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit www.aboutcookies.org or www.allaboutcookies.org.
</template>
