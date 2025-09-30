export enum TypographyVariant {
    TITLE,
    SUBTITLE,
    BODY_DEFAULT_MEDIUM,
    BODY_SMALL_MEDIUM,
    SMALL,
    EXTRA_SMALL
  }
  
  export interface TypographyProps {
    children: React.ReactNode;
    variant: TypographyVariant;
    className?: string;
  }