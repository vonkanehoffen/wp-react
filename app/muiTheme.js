import getMuiTheme from 'material-ui/styles/getMuiTheme'
import config from 'config'

export const muiTheme = getMuiTheme({
  raisedButton: {
    color: config.primaryColor,
    textColor: '#fff',
  }
})