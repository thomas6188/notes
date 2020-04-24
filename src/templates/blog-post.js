import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { formatReadingTime } from '../utils/helpers'
import { rhythm, scale } from '../utils/typography'

const GITHUB_USERNAME = 'thomas6188'
const GITHUB_REPO_NAME = 'notes'
const PAGE_URL = 'https://thomas6188.github.io/notes/'

class BlogPostTemplate extends React.Component {

  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const { previous, next, slug } = this.props.pageContext;

    const discussUrl = `https://mobile.twitter.com/search?q=${encodeURIComponent(
      `${PAGE_URL}${slug}`
    )}`;

    return (
      <Layout location={this.props.location} >

        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.spoiler}
          slug={post.fields.slug}
        />
        {/* Bio */}
        <Bio />

        <h1>{post.frontmatter.title}</h1>

        {/* Post Meta */}
        <p style={{ display: 'block', marginBottom: rhythm(1), marginTop: rhythm(0.5), }}>
          {post.frontmatter.date} {` • ${formatReadingTime(post.timeToRead)}`}
        </p>

        {/* Post Content */}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr></hr>

        {/* Post Footer */}
        <p>
          <Link to={'/'}>Home</Link>
         
        </p>
        <hr style={{ marginBottom: rhythm(1), }} />



        {/* Navigation - Previous and Next posts */}
        <nav>
          <ul
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              listStyle: 'none',
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={'/blog' + previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={'/blog' + next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>

        

      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        spoiler
      }
      fields {
        slug
      }
    }
  }
`
