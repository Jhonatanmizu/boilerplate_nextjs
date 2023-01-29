// JEST
import { render, screen } from '@testing-library/react'
// Components
import Main from '.'

describe('<Main/>', () => {
  it('Should render a heading', () => {
    const { container } = render(<Main />)
    expect(
      screen.getByRole('heading', { name: /Nextjs boilerplate - Mizugawa/i })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render colors correctly', () => {
    const { container } = render(<Main />)
    expect(container.firstChild).toHaveStyle({
      'background-color': '#282a36'
    })
  })
})
