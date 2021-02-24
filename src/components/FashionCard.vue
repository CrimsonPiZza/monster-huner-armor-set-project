<template>
	<mdb-container>
		<mdb-row>
			<mdb-col sm="4">
				<mdb-card class="bg-dark text-light">
					<mdb-view hover>
						<a href="#!">
							<mdb-card-image src="https://i.ibb.co/3MNqtqX/Dr12aio-Vs-AATR-T.jpg" alt="Card image cap"></mdb-card-image>
							<mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
						</a>
					</mdb-view>
					<mdb-btn tag="a" floating action class="ml-auto mr-4" color="elegant">
						<mdb-icon far icon="heart"/>
					</mdb-btn>
					<mdb-card-body class="mt-2">
						<mdb-card-title class="text-white font-weight-bold">Ex Baron Set - Winter Edition</mdb-card-title>
						<hr />
						<p class="font-small grey-dark-text mb-0"> <span class="font-weight-bold">Helm : </span> Snow Baron Helm</p>
						<p class="font-small grey-dark-text mb-0"> <span class="font-weight-bold">Mail : </span> Snowbaron Mail</p>
						<p class="font-small grey-dark-text mb-0"> <span class="font-weight-bold">Arms : </span> Snowbaron Vambraces</p>
						<p class="font-small grey-dark-text mb-0"> <span class="font-weight-bold">Waist : </span> Snowbaron Faulds</p>
						<p class="font-small grey-dark-text mb-0"> <span class="font-weight-bold">Greaves : </span> Snowbaron Greave</p>
					</mdb-card-body>
					<mdb-card-footer color="elegant-color" class="lighten-3 p-0 text-center">
						<ul class="list-unstyled list-inline font-small mt-3">
							<li class="list-inline-item pr-2 white-text">
								<mdb-icon icon="user-astronaut" class="pr-1" /> Kyle Hemsworth
							</li>
							<li class="list-inline-item pr-2 white-text">
								<mdb-icon far icon="clock" class="pr-1" />05/10/2015
							</li>
						</ul>
					</mdb-card-footer>
				</mdb-card>
			</mdb-col>
		</mdb-row>
	</mdb-container>
</template>

<script>
	import { mdbContainer, mdbRow, mdbCol, mdbCard, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardFooter, mdbBtn, mdbView, mdbMask, mdbIcon } from 'mdbvue';
	export default {
		name: 'FashionCard',
		components: {
			mdbContainer,
			mdbRow,
			mdbCol,
			mdbCard,
			mdbCardImage,
			mdbCardBody,
			mdbCardTitle,
			mdbCardFooter,
			mdbBtn,
			mdbView,
			mdbMask,
			mdbIcon
		}
	}
</script>
