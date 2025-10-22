export interface Badge {
    label: string;
    message: string;
    color: string;
}

export interface BadgeOptions {
    style?: string;
    logo?: string;
    link?: string;
}

export interface BadgeResponse {
    svg: string;
    url: string;
}