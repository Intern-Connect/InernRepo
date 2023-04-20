type RowObj = {
	id:number;
	name: string;
	status?: string;
	date?: string;
	companyName: string;
	desc: string;
};

const tableDataComplex: RowObj[] = [
	{
		id:1,
		name: 'web crawling',
		status: 'Approved',
		date: '12 Jan 2021',
		companyName: "etg",
		desc: "Web crawling is the process of indexing and downloading data from the internet using a program or system called a web crawler, spider, spider bot, or web bot. The web crawler downloads web pages associated with given URLs, extracts the hyperlinks contained in them, and downloads the web pages continuously that are found by these hyperlinks. Web crawlers are used by search engines to create entries for a search engine index and to update their web content or indices of other sites’ web content. \n Web scraping is the extraction and copying of data from websites using software. It can be done with a bot or web crawler that simulates human web surfing or with HTML requests that inform the website code of what data to copy. Web scraping is used for various purposes, such as collecting information for analysis, comparison, or indexing. \n Write a  script that crawls this https://daisyui.com/ webs and extracts all the links on the page. ",
	},
	{
		id:2,
		name: 'Horizon UI Free',
		companyName: "Amaz",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sapiente, aperiam nisi rerum molestias, esse maiores laborum repellat pariatur veniam iusto amet! Eveniet mollitia quia ex dolore suscipit ad quis?",
		
	},
	{
		id:3,
		name: 'Weekly Update',
		status: 'Error',
		date: '13 Mar 2021',
		companyName: "A2SV",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sapiente, aperiam nisi rerum molestias, esse maiores laborum repellat pariatur veniam iusto amet! Eveniet mollitia quia ex dolore suscipit ad quis?",

	},
	{
		id:4,
		name: 'Marketplace',
		status: 'Approved',
		date: '24 Oct 2022',
		companyName: "Google",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sapiente, aperiam nisi rerum molestias, esse maiores laborum repellat pariatur veniam iusto amet! Eveniet mollitia quia ex dolore suscipit ad quis?",
	}
];
export default tableDataComplex;
