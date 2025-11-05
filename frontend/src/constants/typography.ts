export const Typography = {
    // Font families
    fontFamily: {
        regular: 'System',
        medium: 'System',
        semibold: 'System',
        bold: 'System',
    },

    // Font sizes (adjusted for wallpaper app)
    fontSize: {
        xs: 11,
        sm: 13,
        base: 15,
        lg: 17,
        xl: 19,
        '2xl': 22,
        '3xl': 26,
        '4xl': 30,
        '5xl': 34,
        '6xl': 44,
        '7xl': 56,
    },

    // Font weights
    fontWeight: {
        normal: '400' as const,
        medium: '500' as const,
        semibold: '600' as const,
        bold: '700' as const,
        extrabold: '800' as const,
    },

    // Line heights
    lineHeight: {
        tight: 1.2,
        normal: 1.4,
        relaxed: 1.6,
        loose: 1.8,
    },

    // Letter spacing
    letterSpacing: {
        tighter: -0.5,
        tight: -0.25,
        normal: 0,
        wide: 0.25,
        wider: 0.5,
        widest: 1,
    },
};
