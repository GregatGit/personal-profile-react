import React, { Component, Fragment } from 'react'
import NavBar from './components/Navbar'
import Welcome from './components/Welcome'
import Skills from './components/Skills'
import About from './components/About1'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Projects from './components/Projects'

class App extends Component {
  state = {
    pages: ['welcome', 'skills', 'projects', 'contact', 'About'],
    page: 'welcome',
    dialogOpen: false,
  }
  changePage = index => {
    this.setState({ page: this.state.pages[index] })
  }
  openDialog = () => {
    this.setState({ dialogOpen: !this.state.dialogOpen })
  }
  render() {
    const { pages, page, dialogOpen } = this.state
    return (
      <Fragment>
        <NavBar
          page={page}
          pages={pages}
          showPage={this.changePage}
          openDialog={dialogOpen}
          openDialogFunc={this.openDialog}
          gutterBottom
        />

        {this.state.page === 'welcome' ? <Welcome /> : ''}
        {this.state.page === 'contact' ? <Contact /> : ''}
        {this.state.page === 'skills' ? <Skills /> : ''}
        {this.state.page === 'projects' ? <Projects /> : ''}
        {this.state.page === 'About' ? <About /> : ''}
        <Footer openDialogFunc={this.openDialog} />
      </Fragment>
    )
  }
}

export default App
