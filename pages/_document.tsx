import Document, { DocumentContext, DocumentInitialProps, Html, Main, NextScript, Head } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render(): JSX.Element {
		return (
				<Html lang='lt'>
					<Head />
					<body>
						<Main/>
						<NextScript/>
					</body>
				</Html>
		);
	}
}

export default MyDocument;