// Theme Configuration - FarmConnect Platform

const theme = {
  // Color Palette
  colors: {
    primary: '#2ecc71',      // Fresh Green
    secondary: '#27ae60',    // Dark Green
    accent: '#f39c12',       // Golden Orange
    dark: '#2c3e50',         // Dark Blue-Gray
    light: '#ecf0f1',        // Light Gray
    gray: '#95a5a6',         // Medium Gray
    white: '#ffffff',        // White
    error: '#e74c3c',        // Red
    success: '#27ae60',      // Green
    warning: '#f39c12',      // Orange
    info: '#3498db'          // Blue
  },

  // Typography
  typography: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem'
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.6,
      loose: 2
    }
  },

  // Spacing
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '2.5rem',
    '3xl': '3rem',
    '4xl': '4rem'
  },

  // Border Radius
  borderRadius: {
    none: '0',
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    full: '9999px'
  },

  // Shadow
  shadow: {
    none: 'none',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
  },

  // Transitions
  transition: {
    fast: '0.15s ease-in-out',
    base: '0.3s ease',
    slow: '0.5s ease-in-out'
  },

  // Breakpoints
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px',
    ultrawide: '1536px'
  },

  // Component Styles
  components: {
    button: {
      primary: {
        bg: '#2ecc71',
        color: '#ffffff',
        hover: {
          bg: '#27ae60',
          shadow: '0 4px 12px rgba(46, 204, 113, 0.3)'
        }
      },
      secondary: {
        bg: 'transparent',
        color: '#2ecc71',
        border: '2px solid #2ecc71',
        hover: {
          bg: '#2ecc71',
          color: '#ffffff'
        }
      },
      tertiary: {
        bg: '#f39c12',
        color: '#ffffff',
        hover: {
          bg: '#e67e22',
          shadow: '0 4px 12px rgba(243, 156, 18, 0.3)'
        }
      }
    },
    card: {
      bg: '#ffffff',
      shadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
      borderRadius: '0.75rem',
      padding: '1.5rem',
      hover: {
        shadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
        transform: 'translateY(-4px)'
      }
    },
    input: {
      bg: '#ffffff',
      border: '2px solid #ecf0f1',
      borderRadius: '0.5rem',
      padding: '0.75rem 1rem',
      focus: {
        border: '2px solid #2ecc71',
        outline: 'none'
      }
    }
  },

  // Gradients
  gradients: {
    primary: 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)',
    success: 'linear-gradient(135deg, #27ae60 0%, #1e8449 100%)',
    accent: 'linear-gradient(135deg, #f39c12 0%, #d68910 100%)',
    neutral: 'linear-gradient(135deg, #ecf0f1 0%, #bdc3c7 100%)'
  }
};

export default theme;
